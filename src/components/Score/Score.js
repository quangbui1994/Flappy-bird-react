import React from 'react';
import Score0 from '../../assets/img/0.png';
import Score1 from '../../assets/img/1.png';
import Score2 from '../../assets/img/2.png';
import Score3 from '../../assets/img/3.png';
import Score4 from '../../assets/img/4.png';
import Score5 from '../../assets/img/5.png';
import Score6 from '../../assets/img/6.png';
import Score7 from '../../assets/img/7.png';
import Score8 from '../../assets/img/8.png';
import Score9 from '../../assets/img/9.png';

const scoreArr = [Score0, Score1, Score2, Score3, Score4, Score5, Score6, Score7, Score8, Score9];

const Score = ({ score }) => (
    <div style={{ 
        width: 20, 
        height: 20, 
        position: 'absolute',
        left: 144,
        top: 20,
        zIndex: 2,
        display: 'flex'
    }}>
        {
            String(score).split('').map((scoreEl, i) => (
                <li key={i}>
                    <img src={scoreArr[scoreEl]} alt="score"/>
                </li>
            ))
        }
    </div>
);

export default Score;