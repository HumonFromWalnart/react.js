import { useEffect, useState } from "react";
import React from "react";
import './TF.css'
import { useNavigate } from "react-router-dom";
import Timer from "./timer";
import { BallBounce } from "./ballbounce";
import LedZeppelin from './images/stairwayToHeavenAlbumCover.png';
import Nirvanna from './images/smellsLikeTeenSpirit.png'
import { AirCraft } from "./airCraft";

const Overplayed = () => {
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
            navigate('/firstElectricGuitar')
        }
        else if (answer === false) {
            showAnswer(2)
            navigate('/wrong')
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
                    <p id="question">Which one has biggest selling album?</p>
                    <div id="answers">
                        <div className="question">
                            <img id='pic' src={Nirvanna} />
                            <div type={'text'} id='answer' onClick={(() => { setAnswer(false) })} >Nirvanna - Smells Like Teen Spirit</div>
                        </div>
                        <div className="question">
                            <img id='pic' src={LedZeppelin} />
                            <div type={'text'} id='answer' onClick={(() => { setAnswer(true) })} >Led Zeppelin - Stairway To Heaven</div>
                        </div>


                    </div>
                </div>
            }

        </div >
    );
}
export default Overplayed;