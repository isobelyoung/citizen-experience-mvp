import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OpenAI from 'openai';
import { RootState } from '../../store';
import { SETUP_PROMPT } from '../../constants';
import { setPromptResponse, setFirstPromptResponse } from '../../store/reducers/gameReducer';
import axios from 'axios';
import './index.css';
import { TypeAnimation } from 'react-type-animation';

type IRole = 'user' | 'function' | 'assistant' | 'system';

const PlayGame = () => {
    const dispatch = useDispatch();
    const { scenario, prompts } = useSelector((state: RootState) => state.game);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const openai = new OpenAI({
        // apiKey: process.env.REACT_APP_OPEN_API_KEY,
        apiKey: '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',
        dangerouslyAllowBrowser: true,
    });

    const setup_prompt = {
        role: 'system',
        content: `${SETUP_PROMPT} \n Backstory: ${scenario.BACKSTORY} \n Characters: ${scenario.CHARACTERS} \n Plot: ${scenario.PLOT}`
    }

    const req_body = {
        'model': 'gpt-3.5-turbo',
        'messages': [
            setup_prompt,
            'Start game'
        ]
    }

    const fetchResponse = async (role: IRole, content:  string) => {
        const res = await openai.chat.completions.create({
            messages: [{ role: role, content: content }],
            model: 'gpt-3.5-turbo'
        });

        return res.choices[0].message.content;
    };

    useEffect(() => {
        const startGame = async () => {
            setLoading(true);
            try {
                const res = await fetchResponse('system', `${SETUP_PROMPT} \n Backstory: ${scenario.BACKSTORY} \n Characters: ${scenario.CHARACTERS} \n Plot: ${scenario.PLOT}`);
                dispatch(setFirstPromptResponse({ step: 1, response: res }));
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            };
        };

        startGame();
    }, []);

    // render function that takes most recent prompt response and renders it
    // call on input function that sends fetch request and triggers render function to re-render with updated latest prompt response
    // style the shit out of it

    return (
        <div className='nes-container is-rounded'>
            <TypeAnimation
                sequence={[prompts[0].response]}
                speed={50}
                repeat={0}
            />
        </div>
    );
};

export default PlayGame;
