import React, { createElement, useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';
import { instance } from './axiosSrc';
import './axios.css';

export const CardContext = createContext();

function AppSecond({ children }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const limit = '?limit=1'
  const [texts, updateText] = useState([]);
  const [image, updateImage] = useState([]);
  const [comment, updateComment] = useState();
  const [profile, updateProfile] = useState([]);
  const [userName, updateUserName]  =useState([]);
  const [date, updateDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await instance.get(`post${limit}`)
      setData(res.data.data)

      console.log(res.data.data)
      const com = await instance.get(`comment${limit}`)
      setData2(com.data.data)
      console.log(com.data.data)

      updateText(res.data.data.map((cur) => { return (cur.text)}))
      updateImage(res.data.data.map((img) => { return (img.image); }))
      updateComment(com.data.data.map((com) => {return com.message}))
      updateProfile(res.data.data.map((pro) => {return (pro.owner.picture)}))
      updateUserName(res.data.data.map((nam) => {return (nam.owner.firstName)}))
      updateDate(res.data.data.map((ymd) => {return (ymd.publishDate)}))
    }
    getData()
      .catch(console.error);
  }, [])
  return (
    <CardContext.Provider value={{ texts, image, comment, profile, userName, date }}>
      {children}
    </CardContext.Provider>
  );
}

export default AppSecond;

