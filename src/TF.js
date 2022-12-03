import { useEffect, useState } from "react";
import React from "react";
import Jackson from "./huh.png";
import './TF.css'
import { useNavigate } from "react-router-dom";
import Timer from "./timer";
import { BallBounce } from "./ballbounce";
import { Flashbang } from "./flashbang";

const LowBudgetCode = () => {
    const [answer, setAnswer] = useState();
    const [isAnswer, showAnswer] = useState(0)
    const navigate = useNavigate();

    const images = ['https://d2r55xnwy6nx47.cloudfront.net/uploads/2016/07/RandomShape_Lead04.gif', 'https://utimaco.com/sites/default/files/2021-07/random-number-generator-stage.jpg']

    const TheTruth = () => {
        setAnswer(true)
        
    }

    const TheLie = () => {
        setAnswer(false)
    }

    const goBack = setTimeout(() => {
        showAnswer(0)
        setAnswer(0)
    }, 33000)

    useEffect(() => {
        if (answer) {
            showAnswer(1)
            // navigate('/flashbang')
        }
        else if (answer === false) {
            showAnswer(2)
            // navigate('/flashbang')
        }
        return () => { clearTimeout(goBack) }
    }, [answer])

    return (
        <div className="theBigBoi">


             {
                isAnswer === 1 && <body>
                    <Flashbang/>
                </body>
            }

            {
                isAnswer === 2 && <body>  <Flashbang/></body>
            }

            {
                isAnswer === 0 && <div className="theSmallerBigBoi">
                    <BallBounce/>
                    <Timer/>
                    <p id="question">Micheal's real race</p>
                    {images.map((number) => <img id="Micheal" src={images[0]}></img>)}
                    <div id="answers">
                        <div type={'text'} id='answer' onClick={TheTruth} >Black</div>

                        <div type={'text'} id='answer' onClick={TheLie} >White</div>
                    </div>
                </div>
            }

        </div >
    );
}
export default LowBudgetCode;