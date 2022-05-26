import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';


function App() { 

  const apiKey = "1783901600a241f13ce66acdf2eebb71 "
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather/?&q=" + cityName + "&cant=5"  + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }
  return (
    <div className="col-md-12">
      <div className="weatherimage">
        <h1 className="heading">Weather App</h1>

        <div  className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"   
          value={inputCity}
            onChange={handleChangeInput}/>
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {Object.keys(data).length > 0 &&
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounder weatherResultBox">
          <img ClassName="weatherIcon" 
          src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" width ="60px"/>
          
          <h5 className="weatherCity" >{data?.name}</h5>
          
          <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          <p className="weatherType">{data?.weather[0].main}  </p>
          <h6>Feels Like  {((data?.main?.feels_like) - 273.15).toFixed(2)}°C </h6>
          <h6>temperature minimum {((data?.main?.temp_min) - 273.15).toFixed(2)}°C </h6>
      
          
    
           </div>
      </div>
}
    
    </div>
    

  );
}

export default App;





