import { CardContext } from "./axiosTest";
import React, { useState } from "react";
import './axios.css'
import './card.css'
import { useContext, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { instance } from "./axiosSrc";

const Post1 = () => {

    const [subData, updateSubData] = useState({});

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
        <div>
            {
                <div id='cardContainer'>
                    <button onClick={toHome} style={{ color: 'black' }}>GO TO YOUR HOME</button>
                    <img id="image" src={subData.image} />
                    <div id="description">{subData.text}</div>
                    <div className='profile'>
                        <div className="user">
                            {
                                subData.owner && <img id="userPic" src={subData.owner.picture} />
                            }
                            {
                                subData.owner && <div id="commentContainer">
                                    <div id="userName" >{subData.owner.firstName}</div>
                                </div>
                            }

                        </div>

                    </div>

                </div>
            }
        </div>

    )

}

export default Post1;