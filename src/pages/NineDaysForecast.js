import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";


const baseURL = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en";

export default function NineDaysForecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setloading] = useState(true);

  // Get Request - NineDaysForecast
  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setForecast(response.data.weatherForecast);
        setloading(false);
    });
  }, []);

  if (loading === true) { return (<p>loading...</p>)}
      return (
          <>
            <div className="forecast_container row">
                {forecast !== null && forecast !== undefined ? 
                    forecast.map((data) => (
                        <div className="forecast_card col" key={data.forecastDate}>
                            <p>{data.forecastDate}</p>
                            <p>{data.week}</p>
                            <img alt="ForecastIcon" src={"https://www.hko.gov.hk/images/HKOWxIconOutline/pic"+data.ForecastIcon+".png"} className="forecast_icon"/>
                            <div className="forecast_temp_container">
                              <FontAwesomeIcon className="forecast_temp_icon" icon={faTemperatureHalf} />
                              <p>{data.forecastMintemp.value}°C - {data.forecastMaxtemp.value}°C </p>
                            </div>
                            <div className="forecast_temp_container">
                              <FontAwesomeIcon className="forecast_temp_icon" icon={faDroplet} />
                              <p>{data.forecastMinrh.value}% - {data.forecastMaxrh.value}% </p>
                            </div>

                        </div>
                    )) : <p>Problem Occurs</p>
                }
            </div> 
          </>
          )
}