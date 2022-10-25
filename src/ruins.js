
import './ruins.css';
import React from 'react';
import toriel from './TorielOverworldSleeping.gif'
import torielBattle from './torielBattle.gif'
import torielDefeat from './torielBetrayalKill.gif'

const Ruins = () => {

    return (
        <div className='ruinsContainer'>
            <header className='ruinsHeader'></header>
            <div className='lore' >
                <div id='torielLore'>
                    Toriel is the second character the protagonist encounters in Undertale.
                    She saves the protagonist from Flowey and guides them through the Ruins.

                    Toriel is a Boss Monster whose head resembles a white-furred Nubian Goat, structured with floppy ears and tiny horns.
                    She has a pair of visible fangs and long eyelashes, and her irises have a dark red tint. She has an anthropomorphic body, with paws at the end of her limbs.
                    She wears a long purple robe with white sleeves and the Delta Rune on the chest.
                    Toriel can also be seen with reading glasses, one instance being in her house when reading a book on snail facts.
                </div>
                <img src={toriel} id='overWorldTorielGif' ></img></div>
            <div className='torielBattleContainer'>
                <img src={torielBattle} id='torielBattle' ></img>
                <div id='torielLore'>
                    Toriel attacks with fireballs in various formations,
                    but will not hurt the protagonist if they have attempted to spare her 11 times or have less than 3 HP.
                    She may be attacked normally or be spared by attempting to spare her 24 times.
                    After being spared enough times, Toriel stops fighting and talks. The option to "Flee" disappears.
                    If the protagonist continues to spare her, she allows the protagonist to leave the Ruins.
                    She asks the protagonist never to return before hugging them and walking back down the corridor.
                    Missing attacks has the same effect as sparing her.
                    If attacked after she stops fighting, she dies in one hit and unique dialogue similar to the one in the Genocide Route appears.
                    The protagonist can choose to intentionally direct their SOUL into Toriel's attacks to lower their HP below 3.
                    At this level, Toriel begins faltering, which allows the protagonist to do nothing for the remaining duration of the battle.
                    If the protagonist restores their HP to at least 3, Toriel resumes fighting until the protagonist's HP drops below that point again or she is spared 11 times.
                </div>
            </div>
            <div className='torielDefeatContainer'>
                <div id='torielLore'>
                    If the protagonist kills her during a Neutral Route,
                    she uses the last of her strength to give them a warning about what lies ahead and calls the protagonist "my child" before she turns to dust.
                    If the protagonist kills her when she stops attacking, she says that the protagonist is no different from the monsters outside the Ruins and laughs hysterically before she dies.
                    In the Genocide Route, she realizes that by keeping the protagonist in the Ruins, she was protecting not the protagonist, but the rest of the monsters in the Underground.
                    The death sprite for Toriel is the same in a Genocide Route and on a Neutral Route if the protagonist kills her after she is spared thirteen times.
                </div>
                <img src={torielDefeat} id='torielDeath' ></img>

            </div>

        </div>

    );


};
export default Ruins;
