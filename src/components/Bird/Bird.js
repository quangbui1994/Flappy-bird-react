import React from 'react';
import BirdImg from '../../assets/img/bird.png';

const Bird = () => (
    <div style={{
        width: 34,
        height: 24,
        position: 'relative',
        top: 150,
        left: 150,
        transform: 'translate(-50%, -50%)',
        background: `url(${BirdImg})`
    }}></div>
);

export default Bird;