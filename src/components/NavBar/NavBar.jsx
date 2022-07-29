import React from "react";
import "./NavBar.css";

const NavBar = () => {

    const handleClick = () => {
        alert("Has tocado el boton!");
    }

    return (
        <div className="nav-bar">
            <img src="#" alt="logo" />
            <div className="search-bar">
                <input type="text" placeholder="City..."></input>
                <button onClick={()=>{handleClick()}}>Search</button>
            </div>
        </div>
    )
}

export default NavBar;