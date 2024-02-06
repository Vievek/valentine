// Three.js
import React, { useState } from 'react';
import './three.css';

const Three = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <>
            <div className='pagethree' id='three'>
                <div className="container" >
                    <div className="valentines" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Envelope />
                        <Front />
                        <Card hovered={hovered} />
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>
        </>
    );
};

const Envelope = () => (
    <div className="envelope"></div>
);

const Front = () => (
    <div className="front"></div>
);

const Card = ({ hovered }) => (
    <div className="card" style={{ top: hovered ? '-90px' : '0' }}>
        <div className="text">
            "Happy"
            <br />
            " Valentine's"
            <br />
            " Day!"
        </div>
        <div className="heart"></div>
    </div>
);

export default Three;
