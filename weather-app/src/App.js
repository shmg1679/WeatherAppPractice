import React, {useState} from "react";
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
  

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchLocation(event);
    }
  };

  const searchLocation = event => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      searchLocation('')
    }
  };


  
  return (
    <div className="app">
      <div className="searchBar">
        {/* <input value={location} onChange={event => searchLocation(event.target.value )} onKeyPress={searchLocation} placeholder="Enter Location" type="text"/> */}

        <div className="form-control">
          <input type="text" required value={location} onChange={event => setLocation(event.target.value)} onKeyPress={handleKeyPress} />

          <label>
            <span style={{ transitionDelay: '0ms' }}>L</span>
            <span style={{ transitionDelay: '50ms' }}>o</span>
            <span style={{ transitionDelay: '100ms' }}>c</span>
            <span style={{ transitionDelay: '150ms' }}>a</span>
            <span style={{ transitionDelay: '200ms' }}>t</span>
            <span style={{ transitionDelay: '250ms' }}>i</span>
            <span style={{ transitionDelay: '300ms' }}>o</span>
            <span style={{ transitionDelay: '350ms' }}>n</span>
          </label>
        </div>
      </div>
      
      <div className="container">
        <div className="top">
          <p>City</p>
          <div className="top location">
            <h1>{data.name}</h1>
          </div>
        </div>

        <div className="top">
          <p>Temperature</p>
          <div className="top temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1>:null}
          </div>
        </div>
        
        <div className="top">
          <p>Weather</p>
          <div className="top description">
            {data.weather ? <h1>{data.weather[0].main}</h1>:null}
          </div>
          <p></p>
        </div>
          

        <div className="bottom">
          <div className="humidity">
            <p>Humidity:</p>
            {data.main ? <p className="bold">{data.main.humidity}%</p>:null}
          </div>

          <div className="feel">
            <p>Feels like:</p>
            {data.main ? <p className="bold">{data.main.feels_like}°F</p>:null}
          </div>

          <div className="wind">
            <p>Wind Speed:</p>
            {data.wind ? <p className="bold">{data.wind.speed}MPH</p>:null}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
