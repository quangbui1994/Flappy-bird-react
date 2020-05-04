import React, { useEffect } from 'react';
import Bird from '../Bird/Bird';
import Pipe from '../Pipe/Pipe';
import ForeGround from '../ForeGround/ForeGround';
import BackgroundImg from '../../assets/img/background.png';
import { connect } from 'react-redux';

const Game = ({ fly, start }) => {
    useEffect(() => {
        const keyPressHandler = e => {
            if (e.keyCode === 32) {
                fly();
            }
        
            start();
        }
    
        document.addEventListener('keypress', keyPressHandler);
    }, []);

    return (
        <div style={{
            width: 288,
            height: 512,
            background: `url(${BackgroundImg})`,
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Bird />
            <Pipe />
            <ForeGround />
        </div>
    )
};

const fly = () => {
    return dispatch => {
        dispatch({ type: 'FLY' });
    }
};
  
const start = () => {
    return (dispatch, getState) => {
        const { status } = getState().game

        if (status != 'playing') {
            setInterval(() => {
                dispatch({ type: 'FALL' });
                dispatch({ type: 'RUNNING' });
            }, 200);
            dispatch({ type: 'START' });
        }
    };
};

const mapStateToProps = ({ game }) => ({
    status: game.status,
});
const mapDispatchToProps = { fly, start };

export default connect(mapStateToProps, mapDispatchToProps)(Game);