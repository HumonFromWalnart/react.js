
import './core.css';
import './App.css';
import React from 'react';
import mettatonEx from './mettatonExOverworld.gif'
import mettatonNeo from './Mettaton_NEO.gif'
import mettatonBattle from './mettatonExAttack.gif'
// import mettatonNoStage from './mettatonDancingWithoutStage.gif'
// import mettatonGuitar from './mettatonGuitar.gif'
// import cursedToriel from './cursedToriel.gif'
// import highMettaton from './mettatonIsSuperHigh.gif'

const Core = () => {

    return (
        <div className='coreContainer'>
            <div className='loreContainer'>
                <div id='mettatonExLore'>
                    After having the switch on his back flipped in the Neutral or True Pacifist Route, Mettaton transforms into Mettaton EX; a new body he specially requested Alphys make for him.
                    In this humanoid form, he has black hair with a long fringe that seems to cover his right eye, pale "skin" and visible metal segments below and above his left eye.
                    He has a pink chest piece, a narrow metallic waist with a box contraption, and black shoulder pads above his segmented arms, which end in gloves.
                    The chest piece has what appear to be a speaker and some knob or gauge, while the waist has two parts that seem to act as a locking mechanism that holds his "heart-shaped core," as they both lose white pixels during his "heart-to-heart" attack.
                    His long black-clad legs end in pink high-heeled boots.
                </div>
                <img src={mettatonEx} id='mettatonExOverworld'>
                </img>
            </div>
            <div className='loreContainer'>
                <img src={mettatonBattle} id='mettatonBattle' ></img>
                <div id='mettatonExLore'>
                    Copies of Mettaton's legs stick out from either side of the box and scroll downwards.
                    They can be either moving inwards and outwards or not move; this can be controlled by shooting them, which stops the moving legs or causes the motionless legs to begin moving again.
                    Copies of Mettaton's legs quickly emerge from the side of the screen.
                    An exclamation mark appears in the area that they will appear in before this attack is used.
                    Small rectangular Mettatons glide down on umbrellas. As they reach the bottom of the screen, they begin to toss hearts that are embroidered with the letter M: they will often toss a second set upwards just as they are leaving the bottom of the screen.
                </div>
            </div>
            <div className='loreContainer'>

                <div id='mettatonExLore'></div>
            </div>
            {/* <div className='loreContainer'>
                <img src={mettatonNeo}></img>
                <div id='mettatonExLore'></div>
            </div> */}
            {/* <img src={mettatonNoStage}></img> */}
            {/* <img src={mettatonGuitar}></img> */}
            {/* <img src={cursedToriel}></img> */}
            {/* <img src={highMettaton}></img> */}
        </div>
    );

};
export default Core;
