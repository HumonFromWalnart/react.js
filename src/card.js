import AppSecond from "./axiosTest";
import React from "react";
import './axios.css'

export const Card = ({ text, image, profile, name }) => {
    return (
        <div>
            <div id="comment">{text}</div>
            <img id="image" src={image}></img>
            <div className="profile">
                <img id="userPic" src={profile}></img>
                <div id="name">{name}</div>
            </div>
        </div>
    );
}