
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const initState = {
    isLoading: false
}

export type loadingReducerType = {
    isLoading: boolean
}

export const loadingReducer = (state:loadingReducerType = initState, action: loadingActionType): loadingReducerType=> { // fix any
    switch (action.type) {
        case TOGGLE_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}
type loadingActionType = {
    type: 'TOGGLE_IS_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): loadingActionType => ({type: TOGGLE_IS_LOADING, isLoading} ) // fix any