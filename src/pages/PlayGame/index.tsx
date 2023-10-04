import { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
import './index.css';
import { TypeAnimation } from 'react-type-animation';
import paths from '../../routes/paths';

type IRole = 'user' | 'function' | 'assistant' | 'system';

const PlayGame = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { scenario, prompts, conversationHistory } = useSelector(
        (state: RootState) => state.game
    );

    const [messageLoading, setMessageLoading] = useState({
        pending: false,
        error: false
    });
    const [imageLoading, setImageLoading] = useState({
        pending: false,
        error: false
    });

    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPEN_API_KEY,
        dangerouslyAllowBrowser: true
    });

    // dev temp constants

    const setup_prompt = {
        role: 'system',
        content: `${SETUP_PROMPT} \n Backstory: ${scenario.BACKSTORY} \n Characters: ${scenario.CHARACTERS} \n Plot: ${scenario.PLOT}`
    };

    const req_body = {
        model: 'gpt-3.5-turbo',
        messages: [setup_prompt, 'Start game']
    };

    const text = `You are sitting at your desk in your home office, working on your computer. It's a quiet afternoon, with raindrops gently tapping against the windowpane. The sound of soft music is playing in the background. Suddenly, your attention is grabbed by the announcement on the radio: 

    {Attention, residents of the province. This is an emergency alert. Flooding is expected in your area due to heavy rains. Please take necessary precautions and ensure your safety.}
    
    What do you do?
    1. Check the weather forecast online.
    2. Call Remy, your neighbor, and inform them about the flood alert.`;

    //////////

    const fetchResponse = async (role: IRole, content: any) => {
        const res = await openai.chat.completions.create({
            messages: [
                ...conversationHistory,
                {
                    role: role,
                    content: content
                }
            ],
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
        const userSubmit = `I choose ${
            prompts[prompts.length - 1].userInput || options[0]
        }`;
        setMessageLoading({ ...messageLoading, pending: true });
        if (prompts.length < 6) {
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
                res && setPageData(res);
                setMessageLoading({ ...messageLoading, pending: false });
            } catch (e) {
                setMessageLoading({ pending: false, error: true });
            }
        }
        if (prompts.length === 6) {
            try {
                const endGamePrompt = `${userSubmit}. {End the game. Do not respond with action options for the user. Based on their final action, 
                resolve the plot, describe the final outcome, and tell the user if they successfully and safely navigated the disaster situation. 
                Give one tip from recommended guidelines on how to best act in the situation. Finish the response with this text: 
                Thanks for playing the CheonJae Survival Experience!
                on a separate line.}`;
                const res = await fetchResponse('user', endGamePrompt);
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
                setQuestion('');
                setOptions([]);
                setMessageLoading({ ...messageLoading, pending: false });
            } catch (e) {
                setMessageLoading({ pending: false, error: true });
            }
        }
        if (prompts.length > 6) {
            navigate(paths.END_GAME);
        }
    };

    const [description, setDescription] = useState<any>();
    const [imageDescription, setImageDescription] = useState<any>();
    const [imageSrc, setImageSrc] = useState<any>();
    const [question, setQuestion] = useState<any>();
    const [options, setOptions] = useState<string[]>([]);
    const [btnText, setBtnText] = useState<string>('Next');

    const formatSystemMessage = (message: string) => {
        setImageDescription(
            message
                .slice(message.indexOf('['), message.indexOf(']'))
                .replace('[ ', '')
                .replace(']', '')
                .trim()
        );

        if (message.includes('What do you do')) {
            setQuestion(
                message.slice(message.indexOf('What'), message.indexOf('1.'))
            );
        }

        setOptions([
            message.slice(message.indexOf('1.'), message.indexOf('2.')),
            message
                .replace(
                    message.slice(
                        message.indexOf('['),
                        message.indexOf(']') + 1
                    ),
                    ''
                )
                .slice(message.indexOf('2.'))
        ]);

        var desc = message
            .replace(
                message.slice(message.indexOf('1.'), message.indexOf('2.')),
                ''
            )
            .replace(message.slice(message.indexOf('2.')), '')
            .replace(question, '')
            .replace(
                message.slice(message.indexOf('['), message.indexOf(']')),
                ''
            );
        setDescription(desc);
    };

    const fetchImage = async (image: string) => {
        setImageLoading({ ...imageLoading, pending: true });
        try {
            const res = await openai.images.generate({
                prompt: `highly detailed colorful anime-style cinematic movie scene of ${image} from player's realistic first person perspective.`,
                n: 1,
                size: '512x512'
            });
            setImageSrc(res['data'][0]['url']);
            setImageLoading({ ...imageLoading, pending: false });
        } catch (e) {
            setImageSrc(
                'https://wallpapers.com/images/hd/peaceful-sky-view-anime-scenery-a28vmq9s05tjpiws.jpg'
            );
            setImageLoading({ pending: false, error: true });
        }
    };

    const setPageData = (message: string) => {
        formatSystemMessage(message);
        fetchImage(imageDescription ? imageDescription : scenario.DEFAULT_IMG);
    };

    useEffect(() => {
        const startGame = async () => {
            setMessageLoading({ ...messageLoading, pending: true });
            setImageLoading({ ...imageLoading, pending: true });
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
                setMessageLoading({ ...messageLoading, pending: false });
                res && setPageData(res);
            } catch (e) {
                setMessageLoading({ pending: false, error: true });
            }
        };
        startGame();
    }, []);

    useEffect(() => {
        prompts.length > 6 && setBtnText('Finish');
    }, [prompts.length]);

    return (
        <div
            className="game-window p-2"
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            <div>
                {imageLoading.pending && (
                    <LoadingDots text="Scene Loading" color="light" />
                )}
            </div>
            <div className='game-input-wrapper'>
                <div className="mb-2">
                    <div className="nes-container is-rounded bg-white">
                        {messageLoading.pending ? (
                            <LoadingDots size="large" />
                        ) : !messageLoading.error ? (
                            <p className="block-text double-line-height">
                                {description}
                            </p>
                        ) : (
                            <p>Sorry, there's been an error! Try refresh</p>
                        )}
                    </div>
                </div>
                {prompts.length <= 7 ? (
                    <div className="mb-2">
                        <div className="nes-container is-rounded bg-white with-title">
                            <p className="title bg-white subheading">
                                {question}
                            </p>
                            {messageLoading.pending ? (
                                <LoadingDots size="large" />
                            ) : !messageLoading.error ? (
                                <div>
                                    <form>
                                        {options.map((option, index) => {
                                            return (
                                                <label
                                                    htmlFor={(
                                                        index + 1
                                                    ).toString()}
                                                    key={index}
                                                    className="display-block"
                                                >
                                                    <input
                                                        id={(
                                                            index + 1
                                                        ).toString()}
                                                        type="radio"
                                                        className="nes-radio"
                                                        name="option"
                                                        value={index + 1}
                                                        onChange={(e: any) => {
                                                            dispatch(
                                                                setUserInput({
                                                                    index:
                                                                        prompts.length -
                                                                        1,
                                                                    input: `${e.target.value} ${option}`
                                                                })
                                                            );
                                                        }}
                                                        defaultChecked={
                                                            index === 0
                                                        }
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
                ) : null}
                <EmphasisButton
                    text={btnText}
                    onClick={handleSubmit}
                    additionalClasses="pb-2"
                />
            </div>
        </div>
    );
};

export default PlayGame;
