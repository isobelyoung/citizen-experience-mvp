import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import OpenAI from 'openai';
import { RootState } from '../../store';
import { SETUP_PROMPT } from '../../constants';
import {
    setPromptResponse,
    setFirstPromptResponse,
    setUserInput,
    setConversationHistory,
    setStartConversationHistory
} from '../../store/reducers/gameReducer';
import LoadingDots from '../../components/LoadingDots';
import EmphasisButton from '../../components/EmphasisButton';
import axios from 'axios';
import './index.css';
import { TypeAnimation } from 'react-type-animation';

type IRole = 'user' | 'function' | 'assistant' | 'system';

const PlayGame = () => {
    const dispatch = useDispatch();
    const { scenario, prompts, conversationHistory } = useSelector(
        (state: RootState) => state.game
    );
    const myRef = useRef(null as null | HTMLDivElement);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const openai = new OpenAI({
        // apiKey: process.env.REACT_APP_OPEN_API_KEY,
        apiKey: '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',
        dangerouslyAllowBrowser: true
    });

    const setup_prompt = {
        role: 'system',
        content: `${SETUP_PROMPT} \n Backstory: ${scenario.BACKSTORY} \n Characters: ${scenario.CHARACTERS} \n Plot: ${scenario.PLOT}`
    };

    const req_body = {
        model: 'gpt-3.5-turbo',
        messages: [setup_prompt, 'Start game']
    };

    const fetchResponse = async (role: IRole, content: any) => {
        const res = await openai.chat.completions.create({
            messages: [...conversationHistory, {
                role: role,
                content: content,
            }],
            model: 'gpt-3.5-turbo'
        });
        dispatch(
            setConversationHistory({
                role: role,
                content: content
            })
        );
        return res.choices[0].message.content;
    };

    const handleSubmit = async () => {
        // fetch api response based on user option choice
        const userSubmit = `I choose ${
            prompts[prompts.length - 1].userInput || options[0]
        }`;
        setLoading(true);
        // add condition here to change prompt after # responses to finish game
        try {
            const res = await fetchResponse('user', userSubmit);
            dispatch(
                setPromptResponse({
                    step: prompts.length + 1,
                    response: res
                })
            );
            dispatch(
                setConversationHistory({
                    role: 'assistant',
                    content: res
                })
            );
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    const text = `You are sitting at your desk in your home office, working on your computer. It's a quiet afternoon, with raindrops gently tapping against the windowpane. The sound of soft music is playing in the background. Suddenly, your attention is grabbed by the announcement on the radio: 

    {Attention, residents of the province. This is an emergency alert. Flooding is expected in your area due to heavy rains. Please take necessary precautions and ensure your safety.}
    
    What do you do?
    1. Check the weather forecast online.
    2. Call Remy, your neighbor, and inform them about the flood alert.`;

    useEffect(() => {
        const startGame = async () => {
            setLoading(true);
            try {
                const res = await fetchResponse(
                    'system',
                    `${SETUP_PROMPT} \n Backstory: ${scenario.BACKSTORY} \n Characters: ${scenario.CHARACTERS} \n Plot: ${scenario.PLOT}`
                );
                dispatch(
                    setStartConversationHistory({
                        role: 'system',
                        content: `${SETUP_PROMPT} \n Backstory: ${scenario.BACKSTORY} \n Characters: ${scenario.CHARACTERS} \n Plot: ${scenario.PLOT}`
                    })
                );
                dispatch(
                    setConversationHistory({
                        role: 'assistant',
                        content: res
                    })
                );
                dispatch(setFirstPromptResponse({ step: 1, response: res }));
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };

        startGame();
    }, []);

    const [description, setDescription] = useState<any>();
    const [question, setQuestion] = useState<any>();
    const [options, setOptions] = useState<string[]>([]);

    const formatSystemMessage = (message: string) => {
        if (message && message.includes('What do you do?')) {
            setDescription(
                message.slice(0, message.indexOf('What do you do?')).trim()
            );
            setQuestion(
                message.slice(
                    message.indexOf('What do you do?'),
                    message.indexOf('1.')
                )
            );
            message.includes('3.')
                ? setOptions([
                      message
                          .slice(message.indexOf('1.'), message.indexOf('2.'))
                          .trim(),
                      message
                          .slice(message.indexOf('2.'), message.indexOf('3.'))
                          .trim(),
                      message.slice(message.indexOf('3.')).trim()
                  ])
                : setOptions([
                      message
                          .slice(message.indexOf('1.'), message.indexOf('2.'))
                          .trim(),
                      message.slice(message.indexOf('2.')).trim()
                  ]);
        } else {
            setDescription(message.trim());
        }
    };

    useEffect(() => {
        formatSystemMessage(prompts[prompts.length - 1].response);
    }, [prompts.length, prompts[0]]);

    return (
        <div className="game-window p-2">
            <div>
                <div className="nes-container is-rounded bg-white">
                    {loading ? (
                        <LoadingDots size="large" />
                    ) : !error ? (
                        <p className="block-text">{description}</p>
                    ) : (
                        <p>Sorry, there's been an error! Try refresh</p>
                    )}
                </div>
                <div className="py-2">
                    <div className="nes-container is-rounded bg-white with-title">
                        <p className="title bg-white">{question}</p>
                        {loading ? (
                            <LoadingDots size="large" />
                        ) : !error ? (
                            <div>
                                <form>
                                    {options.map((option, index) => {
                                        return (
                                            <label
                                                htmlFor={(index + 1).toString()}
                                                key={index}
                                                className="display-block"
                                            >
                                                <input
                                                    id={(index + 1).toString()}
                                                    type="radio"
                                                    className="nes-radio"
                                                    name="option"
                                                    value={index + 1}
                                                    onSelect={(e: any) => {
                                                        dispatch(
                                                            setUserInput({
                                                                index:
                                                                    prompts.length -
                                                                    1,
                                                                input: e.target
                                                                    .value
                                                            })
                                                        );
                                                    }}
                                                    onClick={(e: any) => {
                                                        dispatch(
                                                            setUserInput({
                                                                index:
                                                                    prompts.length -
                                                                    1,
                                                                input: `${e.target.value} ${option}`
                                                            })
                                                        );
                                                    }}
                                                    defaultChecked={index === 0}
                                                />
                                                <span className="block-text m-0">
                                                    {option}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </form>
                            </div>
                        ) : (
                            <p>Sorry, there's been an error! Try refresh</p>
                        )}
                    </div>
                </div>
                <EmphasisButton text="Enter" onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default PlayGame;
