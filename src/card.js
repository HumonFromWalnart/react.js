import './axios.css'
import './card.css'
import React from 'react';
import { CardContext } from "./axiosTest";
import { useContext } from "react";
import { ChangeTheme } from "./themeChangerButton";
import { ThemeContext } from './context';
import { useNavigate } from "react-router-dom";
import { Comment } from './comment.js';

export const CardBOI = () => {

    const { data } = useContext(CardContext);
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
                        <div className={`post ${nig && 'postBackground'} `} >
                            <div id='cardContainer'>
                                <div className='profile'>
                                    <div className="user">
                                        <img id="userPic" src={cur.owner.picture}></img>
                                        <div id="userName" className={`${nig && 'white'}`} >{cur.owner.firstName}</div>
                                    </div>

                                </div>
                                <div id="description" className={`${nig && 'white'}`}>{cur.text}</div>
                                <img id="image" src={cur.image} onClick={() => UNDYNEEEE(cur)} />
                            </div>
                        </div>
                    )
                })
            }

        </div>

    );
}
