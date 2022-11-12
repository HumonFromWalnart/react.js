import { CardContext } from "./axiosTest";
import React from "react";
import './axios.css'
import './card.css'
import { useContext } from "react";
import { ChangeTheme } from "./themeChangerButton";
import { ThemeContext } from './context';
import { useNavigate, useParams } from "react-router-dom";


export const CardBOI = () => {
    const { texts, image, comment, profile, userName, date } = useContext(CardContext);
    const { nig, switchinTime } = useContext(ThemeContext)

    const { id } = useParams()
    console.log(id)

    const navigate = useNavigate();

    function UNDYNEEEE() {
        navigate(`UNDYNE`)
    }
    return (
        <div className={`container ${nig && 'dark'} `}>
            <ChangeTheme onClick={switchinTime} />
            {
                texts.map((cur, index) => {
                    return (
                        <div id='cardContainer'>
                            <img id="image" src={image[index]} onClick={UNDYNEEEE}></img>
                            <div id="description">{texts[index]}</div>

                            <div className='profile'>
                                <div className="user">
                                    <img id="userPic" src={profile[index]}></img>
                                    <div id="commentContainer">
                                        <div id="userName" >{userName[index]}</div>
                                        <div id='comment' >{comment[index]}</div>
                                    </div>
                                    {/* <div>{date[index]}</div> */}
                                </div>

                            </div>

                        </div>
                    )
                })
            }
            {/* <div className="profile">
                <img id="userPic" src={profile}></img>
                <div id="name">{name}</div>
            </div>  */}
        </div>

    );
}

// export default CardBOI