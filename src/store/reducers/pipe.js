const initialState = {
    x: 300,
    pipes: [{ height: Math.round(Math.random() * 200) + 100 }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RUNNING':
            const pipe = { height: Math.round(Math.random() * 200) + 100 }
            return {...state, x: state.x - 10, pipes: state.pipes.concat(pipe)};
        case 'GAMEOVER': 
            return {...state, x: state.x, pipes: state.pipes};
        case 'RESTART':
            return {...initialState};
        default:
            return state;
    }
}