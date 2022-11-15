import { CardContext } from "./axiosTest";
import React, { useEffect } from "react";
import './axios.css'
import './card.css'
import { useContext } from "react";
import { ChangeTheme } from "./themeChangerButton";
import { ThemeContext } from './context';
import { useNavigate, useParams } from "react-router-dom";


export const CardBOI = () => {
    const { data, data2 } = useContext(CardContext);
    const { nig, switchinTime } = useContext(ThemeContext);

    const navigate = useNavigate();

    function UNDYNEEEE(cur) {
        navigate(`/post/${cur.id}`)
    }
    return (
        <div className={`container ${nig && 'dark'} `}>
            <ChangeTheme onClick={switchinTime} />
            {
                data.map((cur) => {
                    return (
                        <div id='cardContainer'>
                            <div id="description" className={`${nig && 'dark'}`}>{cur.text}</div>
                            <img id="image" src={cur.image} onClick={() => UNDYNEEEE(cur)} />
                            <div className='profile'>
                                <div className="user">
                                    <img id="userPic" src={cur.owner.picture}></img>
                                    <div id="commentContainer">
                                        <div id="userName" >{cur.owner.firstName}</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                })
            }
        </div>

    );
}

// export default CardBOI