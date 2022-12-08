import React from "react";
import './goBackButton.css'
import { useNavigate } from "react-router-dom";

export const GoBack = () => {
    const navigate = useNavigate();
    const Navigate = () => {
        navigate('/')
    }

    return (
        <div className="container">
            <button id="goback" onClick={Navigate}>GoBack</button>
        </div>
    );
}