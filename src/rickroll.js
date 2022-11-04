import './core.css';
import './App.css';
import React from 'react';


const Rickroll = () => {
    const rickAudio = new Audio('Rick_Astley_-_Never_Gonna_Give_You_Up_legitmuzic.com.mp3')
    return (
        <div>
            rickAudio.play();
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay"></iframe>
        </div>
    );
}
export default Rickroll;