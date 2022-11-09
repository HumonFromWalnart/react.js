//value => input value
// list & setList => state that used to create comment earlier
// index => number of comment

import React, { useState } from "react";

const [list, setList] = useState([]);

export const Remover = () => {

    <div id='Container'>
        {list.map((doIt, index) => <Text value={doIt} index={index} list={list} setList={setList} />)}
        {list.map((cur) => <div>{cur}</div>)}
    </div>

    function Text({ value, index, list, setList }) {
        const deleteIT = () => {
            const newList = list.filter((cur) => cur !== value);
            setList(newList);
        }

        return (
            <div id='task-container'>
                <p>{`${index + 1} > ${value}`}</p>
                <Negative onClick={deleteIT}></Negative>
            </div>
        )
    }
    const Negative = (negative) => {
        return (
            <button id="negative" onClick={negative.onClick} >Delete</button>
        );
    }
}