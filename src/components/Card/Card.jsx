import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ name, id, max, min, onClose }) => {

    return (
        <div className="card-container">
            <button className="btn-close" onClick={()=>onClose(id)}>X</button>
            <h3 className="city-name">{name}</h3>
            <div className="info-container">
                <img src="#" alt="Weather" />
                <p>Max: {max}</p>
                <p>Min: {min}</p>
            </div>
            <Link to={"/ciudad/" + id} className="more-info">
                <p>Read More...</p>
            </Link>
        </div>
    )
}

export default Card;