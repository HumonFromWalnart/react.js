import { useEffect, useState } from "react";
import React from "react";
import './TF.css'
import { useNavigate } from "react-router-dom";
import Timer from "./timer";
import { BallBounce } from "./ballbounce";
import Will from './images/willFerrell.png';
import Benedict from './images/benedictCumberbatch.png'
import { AirCraft } from "./airCraft";

const VoiceActors = () => {
    const [answer, setAnswer] = useState();
    const [isAnswer, showAnswer] = useState(0)
    const navigate = useNavigate();

    const goBack = setTimeout(() => {
        showAnswer(0)
        setAnswer(0)
    }, 33000)

    useEffect(() => {
        if (answer) {
            showAnswer(1);
            navigate('/theEnd')
        }
        else if (answer === false) {
            showAnswer(2);
            navigate('/flashbang')
        }
        return () => { clearTimeout(goBack) }
    }, [answer])

    return (
        <div className="theBigBoi">
            {
                isAnswer === 0 && <div className="theSmallerBigBoi">
                    <AirCraft/>
                    <BallBounce />
                    <Timer />
                    <p id="question">Which one is voice actor of Megamind?</p>
                    <div id="answers">
                        <div className="question">
                            <img id='pic' src={Will} />
                            <div type={'text'} id='answer' onClick={(() => { setAnswer(true) })} >Will Ferrel</div>
                        </div>
                        <div className="question">
                            <img id='pic' src={Benedict} />
                            <div type={'text'} id='answer' onClick={(() => { setAnswer(false) })} >Benedict Cumberbatch</div>
                        </div>

                    </div>
                </div>
            }

        </div >
    );
}
export default VoiceActors;