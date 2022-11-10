import AppSecond from "./axiosTest";
import React from "react";
import './axios.css'

export const Card = ({ text, image }) => {
    return (
        <div>
            <div id="comment">{text}</div>
            <img id="image" src={image}></img>
            {/* <div id="userPic" src={}></div> */}
        </div>
    );
}