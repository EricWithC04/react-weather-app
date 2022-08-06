import React, { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";

const App = () => {

    const [cities, setCities] = useState([]);

    const { REACT_APP_API_KEY } = process.env;

    function onSearch (cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(json => {
                const ciudad = {
                    max: Math.round(json.main.temp_max),
                    min: Math.round(json.main.temp_min),
                    img: json.weather[0].icon,
                    id: json.id,
                    name: json.name,
                    wind: json.wind.speed,
                    temp: json.main.temp,
                    weather: json.weather[0].main,
                    clouds: json.clouds.all,
                    latitud: json.coord.lat,
                    longitud: json.coord.lon
                }
                const ciudadExistente = cities.find(city => ciudad.id === city.id)
                if(ciudadExistente) alert("Esta ciudad ya existe!")
                else setCities([...cities, ciudad])
            })
            .catch(err => alert("Ciudad no encontrada!"))
    }

    function onClose (id) {
        const aux = cities.filter(city => city.id !== id);
        setCities(aux);
    }

    function onFilter (id) {
        const aux = cities.find(city => city.id === parseInt(id))
        if (aux) {
            return aux;
        } else {
            return null;
        }
    }

    return (
        <>
            <NavBar onSearch={onSearch}/>
            <Routes>
                <Route 
                    exact path="/"
                    element={<Cards ciudades={cities} cerrar={onClose}/>}
                />
                <Route 
                    path="/ciudad/:ciudadId"
                    element={<Detail onFilter={onFilter} />}
                />
            </Routes>
        </>
    )
}

export default App;