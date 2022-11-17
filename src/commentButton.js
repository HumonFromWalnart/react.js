import React from "react";

export const CommentButton = (e) => {
    return (
        <button id='commentButton' type='submit' onClick={e.onClick}>Add</button>
    );
}