import React from 'react';
import ForeGroundImg from '../../assets/img/base.png';

const ForeGround = () => (
    <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 112,
        background: `url(${ForeGroundImg})`
    }}>
    </div>  
);

export default ForeGround;