import { ProxyState } from "../AppState.js";


function _draw(){
  document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export default class WeathersController {

  constructor(){
    ProxyState.on('weather', _draw)
  }

  changeDegreeType(){
    ProxyState.weather.flipDegree()
    ProxyState.weather = ProxyState.weather
  }
}