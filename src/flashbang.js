import React, { useEffect, useState } from 'react';
import thinkFastChuckleNuts from './THINK FAST, CHUCKLENUTS (HD).mp4';
import './flashbang.css'
import { GoBack } from './goBackButton';

export const Flashbang = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 3000)
    }, [])

    return (
        <div>
            {show && <GoBack />}
            <div className='container'>
                <video className='videoTag' autoPlay muted>
                    <source src={thinkFastChuckleNuts} type='video/mp4' id='flashbang' />
                </video>
            </div>
        </div>
    );
}

