
import './hotland.css';
import React from 'react';
import './App.css';
import mettatonOverworld from './mettatonOverworld.gif'
import mettatonBattle from './mettatonAttack.gif'
import mettatonNoLose from './mettatonNoLose.gif'

const Hotland = () => {

    return (
        <div className='hotlandContainer'>
            <div className='loreContainer'>
                <img src={mettatonOverworld} id='mettatonOverworld' ></img>
                <div id='mettatonLore'>
                    Mettaton originally appears as a gray, largely rectangular box with a 4x5 grid of rectangular lights at the top, similar to the mechanism in Snowdin Forest used for Papyrus's Tile Puzzle.
                    The grid of lights can change colors between red, yellow, green, and blue, and Mettaton uses these color changes in place of facial expressions.
                    He has four dials along the bottom of his body, and the bottom, he has a single leg which ends in a wheel. He has two segmented robotic arms which end in white gloves.
                    Mettaton originally appears as a gray, largely rectangular box with a 4x5 grid of rectangular lights at the top, similar to the mechanism in Snowdin Forest used for Papyrus's Tile Puzzle.
                    The grid of lights can change colors between red, yellow, green, and blue, and Mettaton uses these color changes in place of facial expressions.
                    He has four dials along the bottom of his body, and the bottom, he has a single leg which ends in a wheel.
                    He has two segmented robotic arms which end in white gloves.
                </div>
            </div>
            <div className='loreContainer'>
                <div id='mettatonLore'>
                    During the quiz show, if the protagonist answers incorrectly, Mettaton fires an unavoidable electrical beam that halves the protagonist's HP.
                    After the tile puzzle, if the protagonist does not press ACT → "Yellow" right away, Mettaton drops boxes from above in a set pattern, with gaps in between.
                    In the CORE, Mettaton introduces attacks that are later used when he transforms into Mettaton EX, namely boxes and bombs.
                    If Mettaton is not turned around right away, he deploys a mixture of boxes, bombs, and lightning that cannot be shot by the Yellow SOUL.
                    The lightning attack is not used by Mettaton EX.
                </div>
                <img src={mettatonBattle} id='mettatonAttack' ></img>
            </div>
            <div className='loreContainer'>
                <img src={mettatonNoLose} id='mettaton' ></img>
                <div id='mettatonLore'>
                    Mettaton asks a series of multiple-choice questions that must be answered correctly within several seconds (the number says 30, but goes down approximately two numbers per second, giving only 15 seconds to answer).=
                    If incorrectly answered or not answered within the time limit, Mettaton fires an unavoidable electric shock that halves the protagonist's health. In spite of this, it is impossible to die during this quiz show.
                    Alphys on the top right gives answers via hand motion; realizing this, Mettaton chooses to humiliate her by quizzing the protagonist on the identity of her unrequited love interest.
                    Regardless of the protagonist's choice, Mettaton ultimately departs, concluding that the quiz show has lost all dramatic tension.
                </div>
            </div>
        </div>
    );

};
export default Hotland;
