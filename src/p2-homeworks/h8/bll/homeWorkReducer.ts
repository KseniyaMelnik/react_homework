import {UserType} from "../HW8";

type SortUpAction = {
    type: 'sort',
    payload: string
}
type SortDownAction = {
    type: 'sort',
    payload: string
}
type ChekAgeAction = {
    type: 'check',
    payload: number
}
type ActionsType = SortUpAction | SortDownAction | ChekAgeAction

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name < b.name ? -1 : 1);
            } else if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1);
            }
            return state
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}