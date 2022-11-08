import React, { createElement, useState } from 'react';
import axios from 'axios';
import './axios.css';

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
      </div>
    </div>    
  );
 
}

export default AppSecond;