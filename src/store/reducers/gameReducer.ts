import { createSlice } from '@reduxjs/toolkit';
import { StringLiteral } from 'typescript';

export interface PromptResponseState {
    step: number;
    response: string;
    image?: string;
    userInput?: 0 | 1 | 2;
}

export interface ScenarioState {
    BACKSTORY: string;
    CHARACTERS: string;
    PLOT: string;
    DEFAULT_IMG: string;
}

export type IRole = 'user' | 'function' | 'assistant' | 'system';

export interface ConversationHistoryState {
    role: IRole;
    content: string;
}

export interface GameState {
    scenario: ScenarioState;
    prompts: PromptResponseState[];
    conversationHistory: ConversationHistoryState[];
    // add other config here if needed
}

const initialState: GameState = {
    scenario: {
        BACKSTORY: '',
        CHARACTERS: '',
        PLOT: '',
        DEFAULT_IMG: '',
    },
    prompts: [
        {
            step: 0,
            response: ''
        }
    ],
    conversationHistory: [
        {
            role: 'system',
            content: ''
        }
    ]
};

export const gameReducer = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setScenario: (state, { payload }) => {
            state.scenario = payload;
        },
        setFirstPromptResponse: (state, { payload }) => {
            state.prompts[0] = {
                step: payload.step,
                response: payload.response
            };
            state.prompts = [state.prompts[0]];
        },
        setPromptResponse: (state, { payload }) => {
            state.prompts.push({
                step: payload.step,
                response: payload.response
            });
        },
        resetPromptResponse: (state) => {
            state.prompts = [
                {
                    step: 0,
                    response: ''
                }
            ];
        },
        setUserInput: (state, { payload }) => {
            const { index, input } = payload;
            state.prompts[index].userInput = input;
        },
        setStartConversationHistory: (state, { payload }) => {
            state.conversationHistory = [payload];
        },
        setConversationHistory: (state, { payload }) => {
            state.conversationHistory.push(payload);
        },
        resetConversationHistory: (state) => {
            state.conversationHistory = [
                {
                    role: 'system',
                    content: ''
                }
            ];
        }
    }
});

export const {
    setScenario,
    setPromptResponse,
    setUserInput,
    setFirstPromptResponse,
    setConversationHistory,
    setStartConversationHistory,
    resetConversationHistory,
    resetPromptResponse,
} = gameReducer.actions;
