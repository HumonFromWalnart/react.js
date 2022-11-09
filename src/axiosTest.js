import React, { createElement, useState } from 'react';
import axios from 'axios';
import './axios.css';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

function AppSecond() {
  const [data, setData] = useState([]);
  const [comment, updateComment] = useState('');
  const [comments, updateComments] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('https://dummyapi.io/data/v1/post?limit=5', {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097"
        }
      })

      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert('Eyo, site has living cancer');
    }
  }

  function Text({ value, list, setList }) {
    const deleteIT = () => {
      const newList = list.filter((cur) => cur !== value);
      setList(newList);
    }

    return (
      <div id='task-container'>
        <Negative onClick={deleteIT}></Negative>
      </div>
    )
  }
  const Negative = (negative) => {
    return (
      <div>
        <button id="negative" onClick={negative.onClick} >Delete</button>
        <div id='uSuck' onMouseDown={USUCK}>YOU SUCK</div>
      </div >
    );
  }

  function USUCK() {
    alert('BONK! OH YEAH! YOU SUCK!')
  }

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={getData}>send request</button>
      <div className='imageContainer'>

        {/* {
          data.map((cur) => <div><img id='image' src={cur.image} /></div>)


          arr = ['1', '2', '3']
          ...arr => '1', '2', '3'
          [arr] = [['1', '2']]
          [...arr] = ['1', '2']
        } */}

        {
          data.map((cur) => <div><img id='image' src={cur.owner.picture} /></div>)
        }
        <input value={comment} onChange={(e) => { updateComment(e.target.value) }}></input>

        <button onClick={() => { updateComments([...comments, comment]) }}>
          add
        </button>
        {comments.map((add) => <div id='comments'>{add}</div>)}
        {comments.map((doIt) => <Text value={doIt} list={comments} setList={updateComments} />)}
      </div>
    </div>
  );

}

export default AppSecond;