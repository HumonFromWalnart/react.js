import './newHome.css';
import React from 'react';
import './App.css';
import asgoreIdle from './idleAsgore.png'
import asgoreAttack from './asgoreAttack.gif'
import asgoreDefeat from './asgoreDefeat.gif'

const NewHome = () => {
    return (
        <div className='newHomeContainer'>
            <div className='newHomeLore'>
                <img src={asgoreIdle} />
                <div id='asgoreLore'>
                    Asgore Dreemurr (/ˈæzɡɔːr ˈdɹiːmər/ AZ-gore DREE-mər)[1] is the ruler of the Underground and its denizens, monsters.
                    He is the ex-husband of Toriel, father of Asriel Dreemurr, adoptive father of the first human, and the penultimate boss of the Neutral Route.
                    While not evil or malicious, he serves as one of the main antagonists, planning to kill seven humans and use their SOULs to break the barrier which traps the monsters in the Underground.</div>
            </div>
            <div className='newHomeLore'>
                <div id='asgoreLore'>
                    On the Neutral Route before the fight begins, Asgore destroys the MERCY button. He attacks mainly with fireballs and his trident.
                    Asgore forces the protagonist to fight him, and the protagonist cannot spare Asgore.
                    If any of Asgore's attacks hit the protagonist and they do not have enough HP to survive it, the attack drops their HP to 1 when it otherwise would have killed them.
                    However, the next attack that hits the protagonist will kill them.
                    This resembles Toriel refusing to hurt the human if their HP ever drops to 2, instead opting to deliberately miss the protagonist.
                    To decrease Asgore's AT and DF, the protagonist can eat a piece of Butterscotch Pie in battle or talk to Asgore three times.
                    Talking to Asgore only reduces his Stats if the protagonist has 0 EXP. This may allude to channeling someone sensitively familiar.</div>
                <ImageContainer src={asgoreAttack} />
            </div>
            <div className='newHomeLore'>
                <ImageContainer src={asgoreDefeat} />
                <div id='asgoreLore'>
                    Choose to spare him, and Flowey will make an appearance.
                    At the end of his rant the game will crash (at least, on PC) and when you reload it your save file will be "corrupted" - don't panic, it's meant to happen! Just pick Continue, and prepare for an epic battle...
                    You cannot do a pacifist run without Asgore dying. It doesn't matter what you choose.
                    If you kill him, Flowey will take the souls. If you spare him, Flowey kills him himself and takes the souls.
                </div>
            </div>
        </div>
    );

};

const ImageContainer = ({ src }) => {
    return (
        <div>
            <img src={src} id='glowingBox' />
            <div style={{ color: 'white' }}></div>
        </div>
    );
}

export default NewHome;
