import { useState, useEffect } from "react"
import React from "react";


const api key - **************

export default function WeatherForecast() {
    
   

const[weather, setWeather] = useState({
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    temp: "20",
    city: "Zagreb",
    humidity: "30",
    speed:"20",
})

useEffect(() => {
    // Dohvati stvarne podatke za Zagreb kad se komponenta prvotno montira
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Zagreb&units=metric&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        setWeather({
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,     
          temp: data.main.temp,
          city: "Zagreb",
          humidity: data.main.humidity,
          speed: data.wind.speed,
        });
      })
      .catch((error) => {
        alert("Trenutno nije moguće dohvatiti podatke za Zagreb.");
      });
  }, []);

function handleSubmit(event) {
event.preventDefault()

let city = event.target.city.value

if (!city) {
    alert("Nije moguće dohvaiti navedene podatke :)")
    return 

    }

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="        
    + apiKey)
    .then(response => {
        if (!response.ok) {
            throw new Error()

        }
        return response.json()
    })
    .then(data => {
        setWeather({
            icon: "https://openweathermap.org/img/wn/"                                
            + data.weather[0].icon + "@2x.png",
            temp: data.main.temp,
            city: data.name,
            humidity: data.main.humidity,
            speed:data.wind.speed,
        })
    })
    .catch(error => {
        alert("Nije moguće dohvaiti navedene podatke :)")
    })
}

return (
    <div className="container my-5">


<div className="mx-auto weather-circle">
  
<i className="bi bi-thermometer-half icontemp gradient-text1"></i>

        <form className="d-flex" onSubmit={handleSubmit}>
      <input className="form-control mr-sm-2 gradient-text" 
      placeholder="Unesite grad..." name="city" />
      <button className="btn btn-outline-info btn-sm" type="submit">Traži</button>           
    </form>

    <img src={weather.icon} alt="..." />                                                     

    <tempe className="gradient-text1">{weather.temp}°C</tempe>

     <grad className="mb-1 gradient-text">{weather.city}</grad>                      

        
           
     <i className="bi bi-droplet-fill icon gradient-text1"></i>
<span className="label gradient-text1">Vlažnost</span><br />
<span className="value gradient-text1">{weather.humidity} %</span>



<i className="bi bi-tornado icon1 gradient-text"></i>
<span className="label1 gradient-text">Brzina vjetra</span><br />
<span className="value1 gradient-text">{weather.speed} km/h</span>                 
            <div />
            </div>
            </div>
         
    
        )
}
