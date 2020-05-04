import React from 'react';
import BottomPipe from '../../assets/img/bottom-pipe.png';
import { connect } from 'react-redux';

const Pipe = ({ x, pipes }) => (
    <div style={{ position: 'relative', top: 0, height: '100%' }}>
        {
            pipes.map((pipe, i) => (
                <>
                    <div style={{
                        width: 52,
                        height: pipe.height,
                        position: 'absolute',
                        left: x + i * 250,
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
                        left: x + i * 250,
                        top: pipe.height + 100,
                        transition: 'left 200ms'
                    }}></div>
                </>
            ))
        }
        
    </div> 
);

const mapStateToProps = ({ pipe }) => ({
    x: pipe.x,
    pipes: pipe.pipes
});

export default connect(mapStateToProps)(Pipe);