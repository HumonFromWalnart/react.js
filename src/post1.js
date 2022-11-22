import { CardContext } from "./axiosTest";
import React, { useState } from "react";
import './axios.css'
import './card.css'
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeTheme } from "./themeChangerButton";
import { ThemeContext } from './context';
import { instance } from "./axiosSrc";
import { Comment } from "./comment";

const Post1 = () => {

    const [subData, updateSubData] = useState({});
    const { nig, switchinTime } = useContext(ThemeContext);

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            const res = await instance.get(`/post/${id}`)
            console.log(res.data)
            updateSubData(res.data)
        }
        getData()
            .catch(console.error);
    }, [])

    const navigate = useNavigate();

    const toHome = () => {
        navigate('/')
    }

    return (
        <div className={`container ${nig && 'dark'}`}>
            <button onClick={toHome} style={{ color: 'black' }}>GO TO YOUR HOME</button>
            <ChangeTheme onClick={switchinTime} />
            <div className="post">
                <div id='cardContainer'>
                    <div id="profile">
                        <div className="user">
                            {
                                subData.owner && <img id="userPic" src={subData.owner.picture} />
                            }
                            {
                                subData.owner && <div id="userName" >{subData.owner.firstName}</div>
                            }
                        </div>
                    </div>
                    <div id="description">{subData.text}</div>
                    <img id="image" src={subData.image} />
                    <div id="comment">
                        <Comment/>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Post1;