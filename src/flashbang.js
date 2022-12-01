import React from 'react';
import thinkFastChuckleNuts from './THINK FAST, CHUCKLENUTS (HD).mp4';

export const Flashbang = () => {
    return (
        <video className='videoTag' autoPlay loop muted>
            <source src={thinkFastChuckleNuts} type='video/mp4' />
        </video>
    );
}

