
import './snowdin.css';
import React, { useRef } from 'react';
import video from '../src/MonsoonStatus.mp4'
import mettaton from './Mettaton_NEO.gif'


function SpamBOI({ onClick }) {
    return (
        <button onClick={onClick}>HELLO</button>
    );
}



const Home = () => {
    const hook = useRef('');

    function Monsoon() {
        return (
            // console.log("checking if Monsoon function is working")
            <video src={video} type="video/mp4" controls autoPlay />
            // <img src={mettaton} alt='neo'></img>
            // console.log('before', hook.current.style)
        );
    }


    return (
        <div className='container'>

            <div id='hello'>
                <SpamBOI onClick={Monsoon} />
            </div>
            <div id='lol' ref={hook}>
                <video src={video} type="video/mp4" controls autoPlay />
                {/* <img src={require('../Mettaton_NEO.gif')} onClick={() => Monsoon()} alt='neo' style={{ display: 'none' }} ></img> */}
            </div>
        </div>
    );

};
export default Home;
