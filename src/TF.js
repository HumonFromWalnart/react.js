import { useState } from "react";
import React from "react";
import Jackson from "./huh.png";
import './TF.css'
import thinkFastChuckleNuts from './THINK FAST, CHUCKLENUTS (HD).mp4';
import { Flashbang } from "./flashbang";

const LowBudgetCode = () => {
    const [answer, setAnswer] = useState();

    const TheTruth = () => {
        setAnswer(true)
    }

    const TheLie = () => {
        setAnswer(false)
    }

    return (
        <div className="theBigBoi">
            {
                answer && <Flashbang />
            }
            <div className="theSmallerBigBoi">
                <p id="question">Micheal's real race</p>
                <img id="Micheal" src={Jackson}></img>
                <div id="answers">
                    <div type={'text'} id='answer' onClick={TheTruth} >Black</div>

                    <div type={'text'} id='answer' onClick={TheLie} >White</div>
                </div>
            </div>
        </div >
    );
}
export default LowBudgetCode;