import axios from "axios";
import React from "react";

const baseURL = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en";

export default function NineDaysForecast() {
  const [forecast, setForecast] = React.useState(null);

  // Get Request - NineDaysForecast
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        setForecast(response.data.weatherForecast);
      console.log(response.data.weatherForecast)
    });
  }, []);

//   if (!forcast) return null;

    if (forecast !== null && forecast !== undefined) {
        return (
            forecast.map((data, index) => {
                return(
                    <div className={index}>
                        <p>{data.forecastDate}</p>
                        <p>{data.week}</p>

                    </div>
                )
            })
        )} else { 
            return (<p>Problem occurs</p>) }

    


}