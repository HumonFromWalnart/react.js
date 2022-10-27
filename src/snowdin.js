
import './snowdin.css';
import React from 'react';
import './App.css';
import greatPapyrus from './overworldPapyrus.gif'
import papyrusBattle from './battlePapyrus.gif'
import papyrusDeath from './papyrusDeath.gif'

const Snowdin = () => {

    return (
        <div className='snowdinContainer'>
            <div className='loreContainer'>
                <p id='papyrusLore'>
                    Papyrus is the brother of Sans and a major character in Undertale.
                    His main motive is to capture a human so he can become a member of the Royal Guard, and finally have friends and popularity.
                    Papyrus is a tall, perhaps anatomically inaccurate skeleton, with a skull more vertical and geometric than his brother. Being skeletal, many of his expressions incorporate a toothy grin.
                    His eyes resemble vertical slits; his skeletal pseudo-brows form most of his expressions, as well as the corners of his mouth.
                    He has eyeballs which show at times when he is experiencing strong emotions. Papyrus is relatively taller and slightly slimmer than his brother.
                </p>
                <img src={greatPapyrus} id='greatPapyrus'></img>
            </div>
            <div className='loreContainer'>
                <img src={papyrusBattle} id='battlePapyrus' ></img>
                <p id='papyrusLore'>
                    Papyrus turns the protagonist's SOUL blue at the end of the attack that occurs after the protagonist spares or fights him.
                    If the protagonist ACTs to Papyrus at the beginning of the fight, his bone attacks slowly scroll across the bottom, sometimes progressively rising or lowering in height.
                    However, the bones are not high enough to hit the protagonist's red SOUL if the SOUL stays in the middle and, as a result, are easy to dodge.
                    Papyrus continues using this attack until Spare or FIGHT is chosen. This attack deals 4 damage per hit.
                    If the protagonist ACTs to Papyrus at the beginning of the fight, his bone attacks slowly scroll across the bottom, sometimes progressively rising or lowering in height.
                    However, the bones are not high enough to hit the protagonist's red SOUL if the SOUL stays in the middle and, as a result, are easy to dodge.
                    Papyrus continues using this attack until Spare or FIGHT is chosen. This attack deals 4 damage per hit.
                </p>
            </div>
            <div className='loreContainer'>
                    <p id='papyrusLore'>
                        Upon killing Papyrus by cutting off his head in the Neutral Route, he says "ALAS, POOR PAPYRUS!" This is likely a reference to Shakespeare's Hamlet, of the famous scene where Hamlet talks to the skull and says "Alas, poor Yorick!"
                        If the protagonist loses to Papyrus, Asgore’s sound bite plays as the screen fades to black.
                        Even if the protagonist's HP has been diminished by another enemy, their HP is restored to its maximum upon engaging Papyrus in battle.
                    </p>
                    <img src={papyrusDeath} id='papyrusDeath' ></img>
                </div>
        </div>
    );

};
export default Snowdin;
