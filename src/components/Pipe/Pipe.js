import React from 'react';
import ReactDOM from 'react-dom';
import BottomPipe from '../../assets/img/bottom-pipe.png';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';

const Pipe = ({ x, pipes }) => {
    const pipeRef = useRef();
    
    return (
        <div style={{ position: 'relative', top: 0, height: '100%' }}>
            {
                pipes.map((pipe, i) => (
                    <li ref={pipeRef} key={i} style={{listStyle: 'none'}}>
                        <div style={{
                            width: 52,
                            height: pipe.height,
                            position: 'absolute',
                            left: x + i * 200,
                            top: 0,
                            background: `url(${BottomPipe})`,
                            transform: 'rotate(180deg)',
                            transition: 'left 200ms'
                        }}></div>
                        <div style={{
                            width: 52,
                            height: 250,
                            background: `url(${BottomPipe})`,
                            position: 'absolute',
                            left: x + i * 200,
                            top: pipe.height + 200,
                            transition: 'left 200ms'
                        }}></div> 
                    </li>  
                ))         
            }
        </div> 
    )
};

const mapStateToProps = ({ pipe: { x, pipes} }) => ({
    x: x,
    pipes: pipes
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);