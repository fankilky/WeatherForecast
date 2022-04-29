// import "bootstrap/dist/css/bootstrap.min.css";
import NineDaysForecast from "./pages/NineDaysForecast";
import CurrentWeather from "./pages/CurrentWeather";
import SunriseSunset from "./pages/SunriseSunset";


function App() {
  return (
    <div className="App">
      <h1>NineDaysForecast</h1>
      <NineDaysForecast />
      <h1>CurrentWeather</h1>
      <CurrentWeather />
      <h1>SunriseSunset</h1>
      <SunriseSunset />
    </div>
  );
}

export default App;
