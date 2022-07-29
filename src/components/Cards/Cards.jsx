import React, {useState} from "react";
import "./Cards.css";
import Card from "../Card/Card.jsx";

const Cards = () => {

    const [cities, setCities] = useState([]);

    return (
        <div className="cards-container">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}

export default Cards;