
import './ruins.css';
import React from 'react';
import './App.css';
import mettaton from './Mettaton_NEO.gif'

const Ruins = () => {

    return (
        <div className='ruinsContainer'>

            <img src={mettaton}></img>

            <div id='torielLore'>Toriel is the second character the protagonist encounters in Undertale.
                She saves the protagonist from Flowey and guides them through the Ruins.
            </div>
        </div>

    );


};
export default Ruins;
