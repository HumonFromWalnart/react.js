import { useEffect, useState } from "react";
import React from "react";
import './TF.css'
import { useNavigate } from "react-router-dom";
import Timer from "../timer";
import { BallBounce } from "./ballbounce";
import fryingPan from '.src/images/fryingPan.png';
import Hawaiian from '.src/images/hawaiian-modified.png'
import { AirCraft } from "./airCraft";

const FirstElectricGuitar = () => {
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
            navigate('/90sHit')
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
                    <AirCraft/>
                    <BallBounce />
                    <Timer />
                    <p id="question">Which one is first ever electric guitar?</p>
                    <div id="answers">
                        <div className="question">
                            <img id='pic' src={fryingPan} />
                            <div type={'text'} id='answer' onClick={(() => { setAnswer(true) })} >Frying Pan</div>
                        </div>
                        <div className="question">
                            <img id='pic' src={Hawaiian} />
                            <div type={'text'} id='answer' onClick={(() => { setAnswer(false) })} >Hawaiian</div>
                        </div>

                    </div>
                </div>
            }

        </div >
    );
}
export default FirstElectricGuitar;