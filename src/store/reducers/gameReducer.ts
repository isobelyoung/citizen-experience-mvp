import { createSlice } from '@reduxjs/toolkit';
import { StringLiteral } from 'typescript';

export interface PromptResponseState {
    step: number;
    response: string;
    userInput?: 1 | 2;
};

export interface ScenarioState {
    BACKSTORY: string;
    CHARACTERS: string;
    PLOT: string;
};

export interface GameState {
    scenario: ScenarioState;
    prompts: PromptResponseState[];
    // add other config here if needed
};

const initialState: GameState = {
    scenario: {
        BACKSTORY: '',
        CHARACTERS: '',
        PLOT: '',
    },
    prompts: [{
        step: 0,
        response: ''
    }]
};

export const gameReducer = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setScenario: (state, { payload }) => {
            state.scenario = payload;
        },
        setFirstPromptResponse: (state, { payload }) => {
            state.prompts[0] = { step: payload.step, response: payload.response };
        },
        setPromptResponse: (state, { payload }) => {
            state.prompts.push({ step: payload.step, response: payload.response })
        },
        setUserInput: (state, { payload }) => {
            // send payload { index: indexOf prompt, input: number }
            const { index, input } = payload;
            state.prompts[index].userInput = input;
        },
    }
})

export const { setScenario, setPromptResponse, setUserInput, setFirstPromptResponse } = gameReducer.actions;
