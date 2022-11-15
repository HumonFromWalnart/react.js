import React, { createElement, useEffect, useState, createContext, useContext } from 'react';
import axios from 'axios';
import { instance } from './axiosSrc';
import './axios.css';

export const CardContext = createContext();

function AppSecond({ children }) {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const limit = '?limit=1'

  useEffect(() => {
    const getData = async () => {
      const res = await instance.get(`post${limit}`)
      setData(res.data.data)

      console.log(res.data.data)
      const com = await instance.get(`comment${limit}`)
      setData2(com.data.data)
      console.log(com.data.data)

    }
    getData()
      .catch(console.error);
  }, [])
  return (
    <CardContext.Provider value={{ data, data2 }}>
      {children}
    </CardContext.Provider>
  );
}

export default AppSecond;

