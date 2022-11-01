
import './core.css';
import './App.css';
import React from 'react';
import mettatonEx from './mettatonExOverworld.gif'
// import mettatonNeo from './Mettaton_NEO.gif'
import mettatonBattle from './mettatonExAttack.gif'
import mettatonDeath from './mettatonDeath.gif'
import test from './mettatonLore.js'
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
                <div id='mettatonExLore'>
                    If Mettaton EX is spared, he appears only as his torso and head when the game returns to the overworld view.
                    This happens even if the protagonist ends the fight before his limbs fall off.
                    However, if he is killed, he appears in his original box form in the overworld view, but destroyed.
                    For those who plan on killing Mettaton, methods that decrease ratings should be used, as the ratings may hit 10,000 before the protagonist kills Mettaton.
                    Methods that decrease ratings include writing a curse word during the essay and eating Junk Food, so bringing a full inventory of Junk Food is advised.
                    Waiting between turns also steadily decreases ratings. However, it stops decreasing after a certain point.
                </div>
                <img src={mettatonDeath}></img>
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
