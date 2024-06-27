import React from 'react'
import './WeatherApp.css'
// import search from "../Assert/search.png";
// import searchImage from '../Assert/search.png';
// import cloud from '../Assert/cloud.png'


export default function WeatherApp() {

  let api_key="0a642f82951d0d184c761db950ab2422";

  const[wicon,setwicon]=React.useState('cloud.png');


  const search= async()=>{
      const element= document.getElementsByClassName("cityInput");
      if(element[0].value==""){
        return 0;
      }
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

      let response= await fetch(url);
      let data = await response.json();
      const humidity=document.getElementsByClassName("humidity-percentage");
      const wind=document.getElementsByClassName("wind-rate");
      const temparature=document.getElementsByClassName("weather-temp");
      const location=document.getElementsByClassName("weather-location");

      humidity[0].innerHTML=data.main.humidity+"%";
      wind[0].innerHTML=data.wind.speed+"km/h";
      temparature[0].innerHTML=data.main.temp+"^C";
      location[0].innerHTML=data.name;

      if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
        setwicon('clear.png');
      }
      else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
        setwicon('cloud.png');
      }
      else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
        setwicon('drizzle.png');
      }
      else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
        setwicon('drizzle.png');
      }
      else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
        setwicon('rain.png');
      }
      else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
        setwicon('rain.png');
      }
      else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
        setwicon('snow.png');
      }else{
        setwicon('clear.png');
      }

  }

  return (
    <div className='container'>
     <div className="top-bar">
        <input type="text" className='cityInput' placeholder='Search' />
        <div className="search-icon" onClick={search}>
          <img src='search.png' alt="searchIcon" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="cloud" />
      </div>
      <div className="weather-temp">
        25*C
      </div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src='humidity.png' alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percentage">
              64%
            </div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src='wind.png' alt="wind" className="icon" />
          <div className="data">
            <div className="wind-rate">
              18km/h
            </div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
