import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en";

export default function NineDaysForecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setloading] = useState(true);

  // Get Request - NineDaysForecast
  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setForecast(response.data.weatherForecast);
        setloading(false);
      console.log(response.data.weatherForecast)
    });
  }, []);

  if (loading === true) { return (<p>loading...</p>)}

  if (forecast !== null && forecast !== undefined) {
      return (
          forecast.map((data, index) => {
              return(
                  <div key={index}>
                      <p>{data.forecastDate}</p>
                      <p>{data.week}</p>

                  </div>
              )
          })
      )} else { 
          return (<p>Problem Occurs</p>) }

}