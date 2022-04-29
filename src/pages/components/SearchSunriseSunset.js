import axios from "axios";
import { useState, useEffect } from "react";

export default function SearchSunriseSunset(yearSelected) {


    const [yearData, setYearData] = useState()

    const mergeAPI = (yearSelected) => {
        let api = `https://data.weather.gov.hk/weatherAPI/opendata/opendata.php?dataType=SRS&year=2021&rformat=json`
        return api
    }
    useEffect(() => {
            axios.get(mergeAPI).then((response) => {
                setYearData(response.data.data);
            });
    }, [yearSelected]);


    // Get Request with filter - SunriseSunset

    // if (sunrise !== null && sunrise !== undefined) {
    //     return (
    //         sunrise.map((data, index) => {
    //             return(
    //                 <div className={index}>
    //                     <p>{data}</p>

    //                 </div>
    //             )
    //         })
    //     )} else { 
    //         return (<p>Problem Occurs</p>) }


  
}