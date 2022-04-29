import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en";

export default function CurrentWeather() {
  const [current, setCurrent] = useState(null);
  const [loading, setloading] = useState(true);

  // Get Request - CurrentWeather
  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setCurrent(response.data.temperature.data);
        setloading(false);
      console.log(response.data.temperature.data);
    });
  }, []);

  if (loading === true) { return (<p>loading...</p>)}

  if (current !== null && current !== undefined) {
      return (
          current.map((data, index) => {
              return(
                  <div key={index}>
                      <p>{data.place}</p>

                  </div>
              )
          })
      )} else { 
          return (<p>Problem Occurs</p>) }

}