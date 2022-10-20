
import './home.css';
import React, { useRef } from 'react';
// import video from '../src/MonsoonStatus.mp4'
// import mettaton from './Mettaton_NEO.gif'


function SpamBOI({ onClick }) {
    return (
        <button onClick={onClick}>HELLO</button>
    );
}



const Home = () => {
    const hook = useRef('');

    function Monsoon() {
        // <video src={video} type="video/mp4" controls  />
        //  <img src={mettaton}></img>
        console.log('before', hook.current.innerHTML)
        hook.current.innerHTML = "lol"
        console.log('after', hook.current.innerHTML)
        
    }


    return (
        <div className='container'>

            <div id='hello'>
                <SpamBOI onClick={Monsoon} />
            </div>
            <div id='lol' ref={hook}>
                {hook.current.innerHTML} 
            </div>
        </div>
    );

};
export default Home;
