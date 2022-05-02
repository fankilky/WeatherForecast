import SearchSunriseSunset from './components/SearchSunriseSunset';
import { useState } from "react";


export default function SunriseSunset() {

  const [yearSelected, setYearSelected] = useState(
    new Date().getFullYear().toString()
  );
  
  const changeYear = (e) => {
    setYearSelected(e.currentTarget.value);
  }
  
  return(
      <>
        <div className="SunriseSunset_container">
          <button type="button" onClick={changeYear} value="2018" className="SunriseSunset_btn">2018</button>
          <button type="button" onClick={changeYear} value="2019" className="SunriseSunset_btn">2019</button>
          <button type="button" onClick={changeYear} value="2020" className="SunriseSunset_btn">2020</button>
          <button type="button" onClick={changeYear} value="2021" className="SunriseSunset_btn">2021</button>
          <button type="button" onClick={changeYear} value="2022" className="SunriseSunset_btn">2022</button>
          <button type="button" onClick={changeYear} value="2023" className="SunriseSunset_btn">2023</button>
        </div>
        <div className="graph_container">
          <SearchSunriseSunset yearSelected={yearSelected} />
        </div>
      </>
    )
}