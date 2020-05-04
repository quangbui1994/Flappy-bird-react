const initialState = {
    status: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            return {...state, status: 'playing'};
        default:
            return state;
    }
}