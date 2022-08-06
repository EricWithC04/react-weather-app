import React from "react";
import "./Cards.css";
import Card from "../Card/Card.jsx";

const Cards = ({ ciudades, cerrar }) => {

    if(ciudades.length > 0) {
        return (
            <div className="cards-container">
                {ciudades.map(city => <Card 
                        name={city.name}
                        key={city.id}
                        id={city.id}
                        max={city.max}
                        min={city.min}
                        onClose={cerrar}
                    />
                )}
            </div>
        )
    } else {
        return (
            <div>Sin Ciudades</div>
        )
    }
}

export default Cards;