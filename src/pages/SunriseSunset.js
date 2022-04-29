import { useState } from "react";
import SearchSunriseSunset from './components/SearchSunriseSunset';


export default function SunriseSunset() {

  const [yearSelected, setYearSelected] = useState(
    new Date().getFullYear()
  );
  
  const changeYear = (e) => {
    setYearSelected(e.currentTarget.value);
  }

  return(
      <>
        <button type="button" onClick={changeYear} value="2018">2018</button>
        <button type="button" onClick={changeYear} value="2019">2019</button>
        <button type="button" onClick={changeYear} value="2020">2020</button>
        <button type="button" onClick={changeYear} value="2021">2021</button>
        <button type="button" onClick={changeYear} value="2022">2022</button>
        <button type="button" onClick={changeYear} value="2023">2023</button>
        <SearchSunriseSunset yearSelected={yearSelected} />
      </>
    )
}