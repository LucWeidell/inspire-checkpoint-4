import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandApiWeather } from "../Services/AxiosService.js";

async function _setWeather(){
  try {
    const res = await sandApiWeather.get()
    ProxyState.weather = new Weather(res.data)
  } catch (error) {
    console.log('Er: getting and set weather:', error)
  }
}
function _draw(){
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export default class WeathersController {

  constructor(){
    _setWeather()
    ProxyState.on('weather', _draw)
  }

  changeDegreeType(){
    ProxyState.weather.flipDegree()
    ProxyState.weather = ProxyState.weather
  }


}