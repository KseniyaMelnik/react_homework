const CHANGE_THEME = "CHANGE_THEME"

const initState = {
    theme: "green"
};

export type themeReducerType = {
    theme: string
}

export const themeReducer = (state: themeReducerType = initState, action: changeThemeActionType): themeReducerType => {
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type changeThemeActionType = {
    type: "CHANGE_THEME"
    theme: string
}

export const changeThemeC = (theme: string): changeThemeActionType => ({type: CHANGE_THEME, theme}); // fix any



