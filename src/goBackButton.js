import React, { useEffect, useRef } from "react";
import './goBackButton.css'
import { useNavigate, useParams } from "react-router-dom";

export const GoBack = () => {
    const navigate = useNavigate();
    const ref = useRef();
    const ref2 = useRef();
    const Navigate = () => {
        navigate('/')
    }
    const { id } = useParams();
     if(id){
       useEffect(() =>{
         const el1 = ref.current;
         const el2 = ref2.current;
         el1.style.color = "white";
         el2.style.backgroundColor = "black";
       }, [])
     }
    return (
        <div className="container" ref={ref2} >
            <button id="goback" onClick={Navigate} ref={ref} >GoBack</button>
        </div>
    );
}