import { createContext, useContext, useState } from "react";
import React from "react";

export const loreContext = createContext();

export function Lore1({ Children }) {
    const [lore, updateLore] = useState(`   
    After having the switch on his back flipped in the Neutral or True Pacifist Route, Mettaton transforms into Mettaton EX; a new body he specially requested Alphys make for him.
    In this humanoid form, he has black hair with a long fringe that seems to cover his right eye, pale "skin" and visible metal segments below and above his left eye.
    He has a pink chest piece, a narrow metallic waist with a box contraption, and black shoulder pads above his segmented arms, which end in gloves.
    The chest piece has what appear to be a speaker and some knob or gauge, while the waist has two parts that seem to act as a locking mechanism that holds his "heart-shaped core," as they both lose white pixels during his "heart-to-heart" attack.
    His long black-clad legs end in pink high-heeled boots.
    `);

    const [lore2, updateLore2] = useState(`                    
    Copies of Mettaton's legs stick out from either side of the box and scroll downwards.
    They can be either moving inwards and outwards or not move; this can be controlled by shooting them, which stops the moving legs or causes the motionless legs to begin moving again.
    Copies of Mettaton's legs quickly emerge from the side of the screen.
    An exclamation mark appears in the area that they will appear in before this attack is used.
    Small rectangular Mettatons glide down on umbrellas. As they reach the bottom of the screen, they begin to toss hearts that are embroidered with the letter M: they will often toss a second set upwards just as they are leaving the bottom of the screen.
    `)

    const [lore3, updateLore3] = useState(`                    
    If Mettaton EX is spared, he appears only as his torso and head when the game returns to the overworld view.
    This happens even if the protagonist ends the fight before his limbs fall off.
    However, if he is killed, he appears in his original box form in the overworld view, but destroyed.
    For those who plan on killing Mettaton, methods that decrease ratings should be used, as the ratings may hit 10,000 before the protagonist kills Mettaton.
    Methods that decrease ratings include writing a curse word during the essay and eating Junk Food, so bringing a full inventory of Junk Food is advised.
    Waiting between turns also steadily decreases ratings. However, it stops decreasing after a certain point.
    `)

    return (
        <loreContext.Provider value={{ lore, lore2, lore3 }}>
            {Children}
        </loreContext.Provider>
    );
} 