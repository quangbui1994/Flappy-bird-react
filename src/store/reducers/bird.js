const initialState = {
    y: 200,
    rotate: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FLY':
            return {...state, y: state.y - 70, rotate: -20};
        case 'FALL':
            return {...state, y: state.y + 20, rotate: 0};
        default:
            return state;
    }
}