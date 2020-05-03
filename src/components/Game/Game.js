import React from 'react';
import Bird from '../Bird/Bird';
import Pipe from '../Pipe/Pipe';
import ForeGround from '../ForeGround/ForeGround';
import BackgroundImg from '../../assets/img/background.png';

const Game = () => {
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

export default Game;