import React, {useState} from "react";
import './Degree.css';
import axios from "axios";

export default function Degree() {

const [data, setData] = useState({})
const [location, setLocation] = useState('')
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=94fbcb7dd54fc126e7e45bb864572b30`;

const searchLocation = (event) => {
    if(event.key === 'Enter') {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('');
    }
}

    return (
        
        <div className="container">

            <div className="weather">
                <input 
            className="input"
            placeholder='Enter your city' 
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            ></input>
            <div className="city-degree">
                <div>
                    {data.name && data.sys.country ? <p>{data.name}, {data.sys.country} </p> : null}
                    {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null}
                
                </div>
                <div className="description">
                {data.weather ?  <p>{data.weather[0].main}</p> : null}
                   
              </div>
            </div>
            </div>
            
           
            {data.name !== undefined &&

            <div className="additional">
            <div className="humidity">
            {data.main ?  <h3 className="humidity">{data.main.feels_like.toFixed()} <p>Feels like</p></h3> : null}
                    
                </div>
                <div className="visibility">
                {data.main ?  <h3 className="visibility">{data.main.humidity.toFixed()} <p>humidity</p></h3> : null}
                   
                </div>
                <div className="uvindex">
                {data.main ?  <h3 className="uvindex">{data.main.pressure.toFixed()} <p>Pressure</p></h3> : null}
                </div>
            </div> 
            
            }
            
        </div>
    )
}