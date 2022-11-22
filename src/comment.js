import React from "react";
import { useEffect, useRef, useState } from "react";


export function Comment() {

   const [inputValue, setInputValue] = useState('');
   const [comment, updateComment] = useState([]);
   const empty = useRef(null);

   const Nigative = (e) => {
      return (
         <button onClick={e.onClick}>Delete ur shit</button>
      );
   }

   const Opinion = ({ value, comment, updateComment, index }) => {

      // if (inputValue == '') {
      console.log('are u blind? its empty!')
      // } else {
      const filterComment = () => {
         const removed = comment.filter((cur, i) => i !== index);
         updateComment(removed)
      }

         return (
            <div className='newComment'>
               {`${value}`}
               <Nigative onClick={filterComment} />
            </div>
         )
      
      // }
   }

   useEffect(() => {
      console.log(inputValue)
   })

   return (
      <div>

         <input id='commentInput' placeholder='Click to comment' onChange={(e) => setInputValue(e.target.value)} value={inputValue} ref={empty}

            onKeyDown={(e) => {
               if (e.key == "Enter") {
                  updateComment([...comment, inputValue]); setInputValue('');

               }
            }}


         />
         <button id='commentButton' type='submit' onClick={() => { updateComment([...comment, inputValue]); setInputValue(''); }}>Add</button>
         {comment.map((value, index) => <Opinion value={value} index={index} comment={comment} updateComment={updateComment} />)}
      </div>

   )

}