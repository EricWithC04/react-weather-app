import React, { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {

    const [cities, setCities] = useState([]);

    const { REACT_APP_API_KEY } = process.env;

    function onSearch (cityName) {
        console.log("aun no hay nada");
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(json => {
                const ciudad = {
                    max: Math.round(json.main.temp_max),
                    min: Math.round(json.main.temp_min),
                    img: json.weather[0].icon,
                    id: json.id,
                    name: json.name
                }
                const ciudadExistente = cities.find(city => ciudad.id === city.id)
                if(ciudadExistente) alert("Esta ciudad ya existe!")
                else setCities([...cities, ciudad])
            })
    }

    return (
        <>
            <NavBar onSearch={onSearch}/>
            <Cards />
        </>
    )
}

export default App;