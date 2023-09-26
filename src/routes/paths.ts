import { BASE_URL } from "../constants";

interface Paths {
    [key: string]: string;
}

export default {
    HOME: `/`,
    INTRO_GAME: `/play`,
    PLAY_GAME: `/play/survival-experience`,
    NOT_FOUND: '*',
} as Paths;
