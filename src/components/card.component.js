import React from "react";
import '../styles/card.css';


function WeatherCard() {



    return (
        <div className="card">
            <div className="container">
            <form className="example" action="submit">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"> <i class="fa fa-search"></i></button>
            </form>  
            <div className="weatherInfo">
                <div className="leftCard">
                    <h1>Sunny</h1>
                    <h2>31 &#8451;</h2>
                    <p>London, United Kingdom</p>
                </div>
                <div className="rightCard">
                    <img src="https://img.icons8.com/android/480/000000/sun.png" alt="sun png"/>
                </div>
            </div>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </div>
    );
};

export default WeatherCard;