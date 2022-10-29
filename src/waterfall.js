
import './waterfall.css';
import React from 'react';
import './App.css';
import undyneOverworld from './overworldUndyne.gif'
import undyneFight from './undyneFight.gif'
import undynesDeath from './undynesDeath.gif'
import undyneUndying from './UndyneUndying.gif'
import undyneUndyingAttack from './undyneUndyingAttack.gif'

const Waterfall = () => {

    return (
        <div className='waterfallContainer'>
            <div className='lore'>
                <img src={undyneOverworld} id='overworldUndyne'></img>
                <p id='undyneLore'>Undyne also known as StrongFish91 on the UnderNet, is a fish-like monster that leads the Royal Guard.
                    Clad in her full suit of armor, she pursues the protagonist through the entirety of Waterfall and is frequently evaded or inadvertently thwarted by Monster Kid.
                    Undyne is a piscine, anthropomorphic monster. She has blue scales and a long red ponytail.
                    She has red and blue fins on the sides of her head, and a pair of sharp, yellow, protruding teeth.
                    She wears a red eye shadow and has an eyepatch on her left eye. She also wears a black tank top and jeans, but debuts in armor varying in light and dark shades of gray.
                    Her eyes have black vertical pupils and yellow sclera. Undyne has no nose.
                </p>
            </div>
            <div className='lore'>
                <p id='undyneLore'>Undyne is a weapon-based opponent, and uses multiple spear patterns and combinations to attack.
                    With her spear, she can also change the protagonist's SOUL mode.
                    Green Mode is used initially, with the red mode being used twice briefly, and then exclusively following the last set of attacks in green mode.
                    If Undyne's health reaches 0, she manages to cling on to life with Determination and survives further attacks from the protagonist.
                    The protagonist's SOUL returns to Green Mode, preventing the protagonist from fleeing. Undyne's arrows move slower each turn, and every time she attacks, more of her body begins to ripple and split apart.
                    Eventually, she reforms due to her Determination, causing her to have more Determination than her monster body can handle. Because of this, she melts (similar to the Amalgamates in the True Lab near the end of the True Pacifist Route) and slowly passes away.
                    The protagonist is unable to end the battle by sparing her while this is happening, and whether or not they attack her has no effect on how quickly she dies.
                </p>
                <img src={undyneFight}></img>
            </div>
            <div className='lore'>
                <img src={undynesDeath}></img>
                <p id='undyneLore'>If Undyne's health reaches 0, she manages to cling on to life with Determination and survives further attacks from the protagonist.
                    The protagonist's SOUL returns to Green Mode, preventing the protagonist from fleeing. Undyne's arrows move slower each turn, and every time she attacks, more of her body begins to ripple and split apart.
                    Eventually, she reforms due to her Determination, causing her to have more Determination than her monster body can handle.
                    Because of this, she melts (similar to the Amalgamates in the True Lab near the end of the True Pacifist Route) and slowly passes away.
                    The protagonist is unable to end the battle by sparing her while this is happening, and whether or not they attack her has no effect on how quickly she dies.

                </p>
            </div>
            {/* <div className='lore'>
                <img src={undyneUndying}></img>
                <div id='undyneLore'></div>
            </div>
            <div className='lore'>
                <img src={undyneUndyingAttack}></img>
                <div id='lore'></div>
            </div> */}
        </div>
    );

};
export default Waterfall;
