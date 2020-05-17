import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';
import Pipe from '../Pipe/Pipe';
import ForeGround from '../ForeGround/ForeGround';
import BackgroundImg from '../../assets/img/background.png';
import { connect } from 'react-redux';
import Score from '../Score/Score';
import GameOver from '../../assets/img/gameover.png';
import Start from '../../assets/img/start.png';
// import Restart from '../../assets/img/restart.png';

const Game = ({ fly, start, x, y, checkGameOver, status, pipes }) => {
    const [score, setScore] = useState(null);

    if (status === 'initial' && score !== 0) {
        setScore(0);
    }

    useEffect(() => {
        const keyPressHandler = e => {
            if (e.type === 'mousedown') {
                if (e.keyCode === 32) {
                    fly();
                }
            } else {
                fly();
            }
        
            start();
        };
    
        document.addEventListener('keypress', keyPressHandler);
        document.addEventListener('click', keyPressHandler);
    }, []);

    useEffect(() => {
        if (x <= 167) {
            const pipeIndex = Math.floor((167 - x) / 200);
            if (
                (
                    133 < x + pipeIndex * 200 + 52 && 167 > x + pipeIndex * 200
                ) && (
                    y < pipes[pipeIndex].height || y + 24 > pipes[pipeIndex].height + 200
                ) || y > 400
            ) {
                checkGameOver();
            }
            if (167 > x + pipeIndex * 200 + 52) {
                setScore(pipeIndex + 1);
            }
        }
    }, [x, y]);

    useEffect(() => {
        if (status === 'gameover') {
            clearInterval(playing);
        }
    }, [status]);


    return (
        <div style={{
            width: 288,
            height: 512,
            background: `url(${BackgroundImg})`,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {status !== 'initial' && <Score score={score}/>}
            {status !== 'initial' && <Bird />}
            {status !== 'initial' && <Pipe />}
            <ForeGround />   
            <img 
                // onClick={start}
                style={{
                    position: 'absolute',
                    top: 256,
                    left: 144,
                    transform: 'translate(-50%, -70%)'
                }} src={status === 'initial' ? Start : status === 'gameover' ? GameOver : null}/>
        </div>
    )
};

const checkGameOver = () => {
    return dispatch => {
        dispatch({ type: 'GAMEOVER' })
    }
};

const fly = () => {
    return (dispatch, getState) => {
        const { status } = getState().game;
        if (status !== 'gameover') {
            dispatch({ type: 'FLY' });
        }
    };
};

let playing;
  
const start = () => {
    return (dispatch, getState) => {
        const { status } = getState().game;

        if (status === 'initial') {
            playing = setInterval(() => {
                dispatch({ type: 'FALL' });
                dispatch({ type: 'RUNNING' });
            }, 100);
            dispatch({ type: 'START' });
        } else if (status === 'gameover') {
            dispatch({ type: 'RESTART' });
        }
    };
};

const mapStateToProps = ({ bird, game, pipe }) => ({ x: pipe.x, y: bird.y, status: game.status, pipes: pipe.pipes });
const mapDispatchToProps = { fly, start, checkGameOver };

export default connect(mapStateToProps, mapDispatchToProps)(Game);