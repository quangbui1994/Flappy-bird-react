const initialState = {
    status: 'initial'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RESTART':
            return {...state, status: 'initial'};
        case 'START':
            return {...state, status: 'playing'};
        case 'GAMEOVER':
            return {...state, status: 'gameover'};
        default:
            return state;
    }
}