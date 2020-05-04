import React from 'react';
import BirdImg from '../../assets/img/bird.png';
import { connect } from 'react-redux';

const Bird = ({ y, rotate }) => (
    <div style={{
        width: 34,
        height: 24,
        position: 'absolute',
        top: y,
        left: 133,
        transform: `rotate(${rotate}deg)`,
        background: `url(${BirdImg})`,
        transition: 'all 200ms ease',
        zIndex: 3
    }}></div>
);

const mapStateToProps = ({ bird }) => ({
    y: bird.y,
    rotate: bird.rotate
})

export default connect(mapStateToProps)(Bird);