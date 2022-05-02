import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
const baseURL = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en";

export default function CurrentWeather() {
  const [current, setCurrent] = useState(null);
  const [loading, setloading] = useState(true);
  const [region, setRegion] = useState(0);
  const [filtered, setFiltered] = useState(null);


  // Get Request - CurrentWeather
  useEffect(() => {
    axios.get(baseURL).then((response) => {
        setCurrent(response.data.temperature.data);
        setloading(false);
    })
  }, []);

  const getRegion = (e) => {
    setRegion(e.currentTarget.value);
    setFiltered(current[e.currentTarget.value])
  };


  if (loading === true) { return (<p>loading...</p>)}

  return (
      <>
        <div className="search_container row">
            <div className="search_dropbox col-lg-6">
                <label htmlFor="region" className="search_label">Please choose Region:</label>
                <select id="region" name="regionlist" form="regionform" className="search_select" onChange={(e) => getRegion(e)}>
                {current !== null && current !== undefined ? 
                    current.map((data,index) => {
                        return (<option key={index} value={index}>{data.place}</option>)
                    }):<> </>}
                </select>
            </div>
            <div className="region_weather col-lg-6">
                <div className="region_weather_box">
                    {filtered !== null  ? 
                            (<>
                                <p className="region_place">{filtered.place}</p>
                                <div className="region_temp_container">
                                    <FontAwesomeIcon className="region_temp_icon" icon={faTemperatureHalf} />
                                    <p className="region_temp">{filtered.value}°C</p>
                                </div>
                            </>): <>
                                <p className="region_place">{current[region].place}</p>
                                <div className="region_temp_container">
                                    <FontAwesomeIcon className="region_temp_icon"  icon={faTemperatureHalf} />
                                    <p className="region_temp">{current[region].value}°C</p>
                                </div>
                            </>}
                 </div>
            </div>
        </div>
      </>
  )
//   if (current !== null && current !== undefined) {
//       return (
//           current.map((data, index) => {
//               return(
//                   <div key={index}>
//                       <p>{data.place}</p>

//                   </div>
//               )
//           })
//       )} else { 
//           return (<p>Problem Occurs</p>) }

}