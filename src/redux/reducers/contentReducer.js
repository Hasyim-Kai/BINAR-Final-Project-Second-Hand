const initItemState = {
    content: []
}

export const contentReducer = (state = initItemState, action) => {
    if(action.type === 'SET_CONTENT'){
        return{
            ...state,
            content: action.value
        }
    }
    return state
}