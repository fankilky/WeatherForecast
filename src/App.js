import "bootstrap/dist/css/bootstrap.min.css";
import NineDaysForecast from "./pages/NineDaysForecast";
import CurrentWeather from "./pages/CurrentWeather";
import SunriseSunset from "./pages/SunriseSunset";

function App() {

    return (
    <div className="App">
      <h1>Hong Kong Weather Forecast</h1>
      <h2 className="title">Nine Days Forecast</h2>
      <NineDaysForecast />
      <h2 className="title">Current Weather by Region</h2>
      <CurrentWeather />
      <h2 className="title">Sunrise and Sunset</h2>
      <SunriseSunset />
    </div>
  );
}

export default App;
