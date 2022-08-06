import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ onFilter }) => {

    const { ciudadId } = useParams();
    const info = onFilter(ciudadId);

    if (info) {
        return (
            <div className="ciudad">
                <h1>{info.name}</h1>
                <div>Temperatura: {info.temp} °C</div>
                <div>Clima: {info.weather}</div>
                <div>Viento: {info.wind} km/h</div>
                <div>Cantidad de nubes: {info.clouds}</div>
                <div>Latitud: {info.latitud}°</div>
                <div>Longitud: {info.longitud}°</div>
            </div>
        )
    } else {
        return (
            <div>Ciudad no Encontrada</div>
        )
    }
}

export default Detail