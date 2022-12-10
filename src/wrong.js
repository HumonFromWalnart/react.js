import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import punch from './Markiplier Punches You.mp4';
import './flashbang.css'
import { GoBack } from './goBackButton';
import './wrong.css'

export const Wrong = () => {
    const [show, setShow] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 6000)
    }, [])

    return (
        <div>
            {show && <GoBack />}
            <div className='container' style={{backgroundColor : 'black'}}>
                <video className='videoTag' autoPlay muted>
               
                    <source src={punch} type='video/mp4' id='flashbang' />
                </video>
            </div>
        </div>
    );
}
