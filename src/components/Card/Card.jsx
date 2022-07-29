import React from "react";
import "./Card.css";

const Card = () => {

    const onClose = () => {
        alert("Me cerraste!");
    }

    return (
        <div className="card-container">
            <button className="btn-close" onClick={()=>onClose()}>X</button>
            <h3 className="city-name">Nombre</h3>
            <div className="info-container">
                <img src="#" alt="Weather" />
                <p>Max: </p>
                <p>Min: </p>
            </div>
        </div>
    )
}

export default Card;