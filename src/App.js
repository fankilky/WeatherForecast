// import "bootstrap/dist/css/bootstrap.min.css";
import NineDaysForecast from "./pages/NineDaysForecast";
import CurrentWeather from "./pages/CurrentWeather";
import SunriseSunset from "./pages/SunriseSunset";


function App() {
  return (
    <div className="App">
      <NineDaysForecast />
      <CurrentWeather />
      <SunriseSunset />
    </div>
  );
}

export default App;
