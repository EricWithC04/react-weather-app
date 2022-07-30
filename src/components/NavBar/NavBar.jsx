import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({ onSearch }) => {

    const [cityInput, setCityInput] = useState("")

    const handleClick = (e) => {
        e.preventDefault();
        if(!input) return alert("Debes escribir el nombre de una ciudad!")
        else onSearch(cityInput)
    }

    const handleChange = (e) => {
        setCityInput(e.target.value);
    }

    return (
        <div className="nav-bar">
            <img src="#" alt="logo" />
            <div className="search-bar">
                <input type="text" placeholder="City..." onChange={(e)=>handleChange(e)}></input>
                <button onClick={(e)=>{handleClick(e)}}>Search</button>
            </div>
        </div>
    )
}

export default NavBar;