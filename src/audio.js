import React, { useEffect, useState } from 'react';

export const Audio = () => {

    const audioTune = new Audio('<vineboom-long.mp3>');
    const [playInLoop, setPlayInLoop] = useState(false);


    useEffect(() => {
        audioTune.load();
    }, [])


    useEffect(() => {
        audioTune.loop = playInLoop;
    }, [playInLoop])


    const playSound = () => {
        audioTune.play();
    }


    const pauseSound = () => {
        audioTune.pause();
    }


    const stopSound = () => {
        audioTune.pause();
        audioTune.currentTime = 0;
    }
    return (
        <div>
            <div onClick={(() => playSound)}>Play</div>
            <div onClick={(() => pauseSound)}>Pause</div>
            <div onClick={(() => stopSound)}>Stop</div>
        </div>
    )

}

export default Audio;