import { DARK_THEME, LIGHT_THEME } from "../constant";

const initialState = { theme: false };
const switcher = (theme = initialState, { type }) => {
    switch (type) {
        case DARK_THEME:
            return { theme: true };
        case LIGHT_THEME:
            return { theme: false };
        default:
            return theme;
    }
};

export default switcher;
