import { useEffect, useState } from "react";
import React from "react";
import Jackson from "./images/huh.png";
import './TF.css'
import { useNavigate } from "react-router-dom";
import Timer from "./timer";
import { BallBounce } from "./ballbounce";
import { AirCraft } from "./airCraft";

const LowBudgetCode = () => {
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
            navigate('/overplayed')
        }
        else if (answer === false) {
            showAnswer(2)
            navigate('/wrong')
        }
        return () => { clearTimeout(goBack) }
    }, [answer])

    return (
        <div className="theBigBoi">

            {/* 
            {
                isAnswer === 1 && <body>
                    <Flashbang />
                </body>
            }

            {
                isAnswer === 2 && <body>  <Flashbang /></body>
            } */}

            {
                isAnswer === 0 && <div className="theSmallerBigBoi">
                    <AirCraft />
                    <BallBounce />
                    <Timer />
                    <p id="question">Micheal's real race</p>
                    <img id="pic" src={Jackson} ></img>
                    <div id="answers">
                        <div type={'text'} id='answer' onClick={(() => { setAnswer(true) })} >Black</div>

                        <div type={'text'} id='answer' onClick={(() => { setAnswer(false) })} >White</div>
                    </div>
                </div>
            }

        </div >
    );
}

export default LowBudgetCode;
