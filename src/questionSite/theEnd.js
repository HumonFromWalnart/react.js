
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const TheEnd = () => {

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
            navigate('/')
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
                isAnswer === 0 &&
                <div>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" id="rickroll">
                        Yup this is the end, click on me if you want to reset
                    </a>
                    <div onClick={(() => { setAnswer(true) })}>
                        .
                    </div>
                </div>
            }

        </div >
    );
}
export default TheEnd;