import { useEffect, useState } from "react";
import React from "react";
import './TF.css'
import { useNavigate } from "react-router-dom";
import Timer from "../timer";
import { BallBounce } from "./ballbounce";
import Coolio from '.src/images/gangstasParadise.png';
import Nirvanna from '.src/images/smellsLikeTeenSpirit.png'
import { AirCraft } from "./airCraft";

const HitsOf90s = () => {
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
            navigate('/voiceActors')
        }
        else if (answer === false) {
            showAnswer(2)
            navigate('/flashbang')
        }
        return () => { clearTimeout(goBack) }
    }, [answer])

    return (
        <div className="theBigBoi">
            {
                isAnswer === 0 && <div className="theSmallerBigBoi">
                    <AirCraft />
                    <BallBounce />
                    <Timer />
                    <p id="question">Which one 90s biggest hit?</p>
                    <div id="answers">
                        <div className="question">
                            <img id='pic' src={Nirvanna} />
                            <div type={'text'} id='answer' onClick={(() => { setAnswer(true) })} >Nirvanna - Smells Like Teen Spirit</div>
                        </div>
                        <div className="question">
                            <img id='pic' src={Coolio} />
                            <div type={'text'} id='answer' onClick={(() => { setAnswer(false) })} >Coolio - Gangsta's Paraside</div>
                        </div>

                    </div>
                </div>
            }

        </div >
    );
}
export default HitsOf90s;