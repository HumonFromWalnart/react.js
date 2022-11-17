import React from "react";


export function CommentInput(e){
     return(
        <input id='commentInput' placeholder='Click to comment' type={'text'} onChange={e.onChange} value={e.value}/>
     )
}