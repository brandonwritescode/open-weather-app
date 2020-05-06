import React, { useState, useEffect } from "react";
import RainSvg from '../assets/img/310148(2).png';
import '../styles/card.css';


function WeatherCard() {

    const [currentWeather, setCurrentWeather] = useState({});
    const [currentLocation, setCurrentLocation] = useState({});
    const [validData, setValidData] = useState({});
    const [isSunny, setIsSunny] = useState(true);
    const [weatherSvg, setWeatherSvg] = useState('');

    
    useEffect(() => {
        fetch("/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02")
        .then(res => res.json())
        .then(j => setCurrentWeather(j))
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        
        const condition = currentWeather.weather && currentWeather.weather[0].main;
        const temp = currentWeather.main && parseInt(currentWeather.main.temp - 273);
        const location = currentWeather.name;

        setValidData(
            {
                "condition": condition,
                "temp":temp,
                "location": location
            }
            );

        if(condition === "Drizzle") {
            setIsSunny(true);
        } else {

            setIsSunny(false);
        }


    }, [currentWeather]);


    useEffect(() => {

        if(isSunny) {
            console.log("IT IS SUNNY");
            setWeatherSvg("https://img.icons8.com/android/480/000000/sun.png");
        } else {
            setWeatherSvg(RainSvg);
        }
    }, [isSunny]);


    return (
        <div className="card">
            <div className="container">
                <div className="searchBar">
                    <form className="example" action="submit">
                        <input type="text" placeholder="Search.." name="search"></input>
                        <button type="submit"> <i className="fa fa-search"></i></button>
                    </form>  
                </div>
                <div className="weatherInfo">
                    <div className="leftCard">
                        <h1>{validData.condition}</h1>
                        <h2>{validData.temp}&#8451;</h2>
                        <p>{validData.location}</p>
                    </div>
                    <div className="rightCard">
                        <img className="sunPng" src={weatherSvg} alt="sun png"/>
                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </div>
    );
};

export default WeatherCard;