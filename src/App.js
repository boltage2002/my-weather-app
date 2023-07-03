import React, { useEffect, useState } from 'react';
import Descriptions from './components/Descriptions';
import colds from './images/pic.jpg';
import { getFormattedWeatherData } from './weatherdata';
import hots from './images/hot.jpeg'
function App() {
  const [city,setCity]=useState(" paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits]=useState("metric");
  const [bg,setBg]=useState(hots)
// eslint-disable-next-line
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city,units);
      setWeather(data);
      const background =units==="metric"?20:60;
      if(data.temp<=background)setBg(colds);
      else setBg(hots)
    };

    fetchWeatherData();
  }, [units,city]);
  const handleUnitClick=(e)=>{
const button =e.currentTarget;
const currentUnit=button.innerText.slice(1);
const isCelsius=currentUnit==="C";
button.innerText=isCelsius?"°F":"°C";
setUnits(isCelsius?"metric":"imperial");

  }; 
  const enterKeyPressed=(e)=>{
    if (e.key === 'Enter'){
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input onKeyDown={enterKeyPressed}type="text" name="city" placeholder="Enter city..." />
              <button onClick={(e)=>handleUnitClick(e)}>°F</button>
            </div>
            <div className="section section__temperature">
              <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>

                <img src={weather.iconURL} alt="weatherIcon" style={{ width: '70px', height: 'auto' }} />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()}°${units==="metric"?"C":"F"}`}</h1>
              </div>
            </div>
            <Descriptions weather={weather}units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
