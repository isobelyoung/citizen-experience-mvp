export let BASE_URL: string;
if (process.env.NODE_ENV === 'development') {
    let BASE_URL = 'http://localhost:3000'
} else {
    let BASE_URL = ''
};

export const GAME_SCENARIOS = [
    { 
        BACKSTORY: `The player is a software engineer living in a rural province in South Korea. They are working at the computer in your home office, 
            facing out a window. It is raining outside. You know that your area is prone to flooding and are worried that this weather may lead to a 
            natural disaster. Your area has little infrastructure to support citizens in the event of a flood.`,
        CHARACTERS: `There are two neighbouring houses. Next door lives Remy - another young professional who works remotely. You are friends, 
        but you know he can panic easily in a crisis. Your other neighbour lives across the road and her name is Mrs Gray. She is an elderly 
        retiree who moved to the province recently. You do not know her well, but you have talked to her in the street and noticed she has 
        some mobility issues.`,
        PLOT: `The story starts with you sitting at your desk working. You are listening to the radio and an announcement comes on issuing an alert 
        flooding in your area. The story should increase in intensity, and you should try to find safety for you and your neighbours as the flood 
        waters become more and more dangerous.`
    }
];

export const SETUP_PROMPT = `I want you to act as a text based adventure game. I will type commands and you will reply with a description of 
    what the player character sees. I want you to only reply with the game output and nothing else. Do not write explanations. Do not type 
    commands unless I instruct you to do so. Do not type any commands from the player unless I tell you otherwise. When I need to give you 
    instructions that are not player commands, I will do so by putting text inside curly brackets {like this}. Treat any text I put inside 
    brackets {like this} as instructions for you and not player input in the game. Every time the player would take an action, stop writing 
    and wait for input. Do not make decisions for the player. Every time the player would make a decision, instead of continuing, stop and 
    wait for player input. Every time you stop and wait for player input, provide two options for the player to choose from, like this: 
    What do you do?
    1. Option 1
    2. Option 2

    Do not give the player more than 3 action options. Do not give the player the same option more than twice. Your responses should be limited 
    to around 2 lines excluding the player's options.

    Refer to the disaster relief guide of the specified region to inform options given to player. If not, use general disaster response guidelines.

    The user will respond with their chosen action. Based on their choice, generate the next step in the game in line with the story plot.

    Remember the user's actions and how it impacts the story. Generate the next step in the story based on their choice of action.
    `