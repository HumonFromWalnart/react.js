import React from "react";
import './switch.css'

export const ChangeTheme = (e) => {
    return (
        <div>
            <label class="switch" onClick={e.onClick}>
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </div>
    );
}