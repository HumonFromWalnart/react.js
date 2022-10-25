
import './core.css';
import './App.css';
import React from 'react';
import mettaton from './mettatonDance.gif'
import mettatonNeo from './Mettaton_NEO.gif'
import mettatonNoStage from './mettatonDancingWithoutStage.gif'
import mettatonGuitar from './mettatonGuitar.gif'
import cursedToriel from './cursedToriel.gif'
import highMettaton from './mettatonIsSuperHigh.gif'

const Core = () => {

    return (
        <div className='coreContainer'>
            <img src={mettaton}></img>
            <img src={mettatonNeo}></img>
            <img src={mettatonNoStage}></img>
            <img src={mettatonGuitar}></img>
            <img src={cursedToriel}></img>
            <img src={highMettaton}></img>
        </div>
    );

};
export default Core;
