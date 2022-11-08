import React from "react";
import './switch.css'

export const ChangeTheme = (e) => {
    return (
        <div>
            <label class="switch" >
                <input type="checkbox" onClick={e.onClick}/>
                <span class="slider round"></span>
            </label>
        </div>
    );
}