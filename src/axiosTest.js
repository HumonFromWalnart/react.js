import React, { createElement, useState } from 'react';
import axios from 'axios';
import { instance } from './axiosSrc';
import './axios.css';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { Card } from './card.js';
 
function AppSecond() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [comment, updateComment] = useState('');
  const [comments, updateComments] = useState([]);
  const limit = '?limit=1'


  const getData = async () => {
    try {
      const res = await instance.get(`post${limit}`)
      // const lol = await instance.get(`post${limit}`)
      // setData2(lol.data.data)
      // console.log(lol.data.data)
      setData(res.data.data)
      console.log(res.data.data)
    } catch (err) {
      alert('Eyo, Site has living cancer');
    }
  }


  // const getData = async () => {
  //   try {
  //     const res = await axios.get(`https://dummyapi.io/data/v1/post?limit=${number}`, {
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //         "app-id": "636a0100b23c1794f297d097"
  //       }
  //     })

  //     setData(res.data.data);

  //     console.log(res.data.data);
  //   } catch (err) {
  //     alert('Eyo, site has living cancer');
  //   }
  // }

  // function Text({ value, comments, updateComments }) {
  //   const deleteIT = () => {
  //     const newComment = comments.filter((cur) => cur !== value);
  //     updateComments(newComment);
  //   }

  //   return (
  //     <div id='task-container'>
  //       <Negative onClick={deleteIT}></Negative>
  //     </div>
  //   )
  // }
  // const Negative = (negative) => {
  //   return (
  //     <div>
  //       <button id="negative" onClick={negative.onClick} >Delete</button>
  //       <div id='uSuck' onMouseOver={USUCK}>YOU SUCK</div>
  //     </div >
  //   );
  // }

  // function USUCK() {
  //   alert('BONK! OH YEAH! YOU SUCK!')
  // }

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={getData}>send request</button>
      <div id='apiContainer'>

     
          {data.map((cur) => <Card text={cur.text} image={cur.image} profile={cur.owner.image} />)}
        

        {/* <div id='imageContainer'>
          {data2.map((img) =>  <Card/>)}
        </div> */}

      </div>
      {/* <div className='imageContainer'>


        <input value={comment} onChange={(e) => { updateComment(e.target.value) }}></input>

        <button onClick={() => { updateComments([...comments, comment]); updateComment(''); getData(); }}>
          add
        </button>
        {data.map((cur) => <div><img id='image' src={cur.owner.picture} /></div>)}
        {comments.map((add) => <div id='comments'>{add}</div>)}
        {comments.map((doIt) => <Text value={doIt} comments={comments} updateComments={updateComments} />)}

      </div> */}
    </div>
  );

}

export default AppSecond;



{/* {
          data.map((cur) => <div><img id='image' src={cur.image} /></div>)


          arr = ['1', '2', '3']
          ...arr => '1', '2', '3'
          [arr] = [['1', '2']]
          [...arr] = ['1', '2']
        } */}
