import React from 'react';
import thinkFastChuckleNuts from './THINK FAST, CHUCKLENUTS (HD).mp4';
import './flashbang.css'

export const Flashbang = () => {
    return (
        <video className='videoTag' autoPlay muted>
            <source src={thinkFastChuckleNuts} type='video/mp4' id='flashbang' />
        </video>
    );
}

