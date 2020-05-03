import React from 'react';
import BottomPipe from '../../assets/img/bottom-pipe.png';

const Pipe = () => (
    <div>
        <div style={{
            width: 52,
            height: 100,
            position: 'absolute',
            left: 150,
            top: 0,
            background: `url(${BottomPipe})`,
            transform: 'rotate(180deg)'
        }}></div>
        <div style={{
            width: 52,
            height: 320,
            background: `url(${BottomPipe})`,
            position: 'absolute',
            left: 150,
            top: 200
        }}></div>
    </div> 
);

export default Pipe;