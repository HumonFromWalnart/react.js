import './axios.css'
import './card.css'
import React, { useEffect, useState } from 'react';
import { CardContext } from "./axiosTest";
import { useContext } from "react";
import { ChangeTheme } from "./themeChangerButton";
import { ThemeContext } from './context';
import { useNavigate } from "react-router-dom";
import { CommentButton } from './commentButton';
import { CommentInput } from './commentInput';

export const CardBOI = () => {

    const { data } = useContext(CardContext);
    const { nig, switchinTime } = useContext(ThemeContext);
    const [inputValue, setInputValue] = useState('');
    const [comment, updateComment] = useState([]);

    const navigate = useNavigate();

    function UNDYNEEEE(cur) {
        navigate(`/post/${cur.id}`)
    }

    const Nigative = (e) =>{
        return(
        <button onClick={e.onClick}>DelETE</button>
        );
    }


    const Opinion = ({value, comment, updateComment, index}) => {
      const filterComment = () =>{                                
       const removed = comment.filter((cur) => cur !== index);            
          updateComment(removed)
      }

        return (
            <div className='newComment'>
                {`${index+1} ${value}`}
                <Nigative onClick={filterComment}/>
            </div>       
        )
    }
    useEffect(() => {
        console.log(inputValue)
    })

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
                                <div id='comment'>
                                    {comment.map((value, index) => <Opinion value={value} index={index} comment={comment} updateComment={updateComment}/>)}
                                    <CommentInput onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                                    <CommentButton onClick={() => {updateComment([...comment, inputValue]); setInputValue('')}} />
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