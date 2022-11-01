import React from "react"
import { propTypes } from "react-bootstrap/esm/Image"

const Lore = (probs) => {
    const {lore, image} = probs
    return(
    <div>
        <div>{lore}</div>
        <div>{image}</div>
    </div>
    );

}