const initialState = {
    x: 300,
    pipes: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RUNNING':
            const pipe = { height: Math.round(Math.random() * 200) + 50 }
            return {...state, x: state.x - 10, pipes: state.pipes.concat(pipe)};
        default:
            return state;
    }
}