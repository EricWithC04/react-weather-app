import React from "react";
/* import { Link } from "react-router-dom"; */
import "./Card.css";

const Card = ({ name, id, max, min }) => {

    const onClose = () => {
        alert("Me cerraste!");
    }

    return (
        <div className="card-container" key={id}>
            <button className="btn-close" onClick={()=>onClose()}>X</button>
            <h3 className="city-name">{name}</h3>
            <div className="info-container">
                <img src="#" alt="Weather" />
                <p>Max: {max}</p>
                <p>Min: {min}</p>
            </div>
            <p>Read More...</p>
        </div>
    )
}

export default Card;