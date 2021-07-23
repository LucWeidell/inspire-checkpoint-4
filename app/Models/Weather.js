

export default class Weather {

  constructor({weather, name, sys}){
    this.temp = weather.temp;
    this.city = name
    this.country = sys.country
    this.fahrenheit = true
    // TODO could ad icon here
  }

  get Template(){
    return `
    `
  }
}




/**
 * {

"coord": {
  "lon": -116.2035,
  "lat": 43.6135
},

"weather": [

{
"id": 711,
  "main": "Smoke",
  "description": "smoke",
  "icon": "50d"
}
],
"base": "stations",

"main": {
  "temp": 303.61,
  "feels_like": 301.74,
  "temp_min": 302.45,
  "temp_max": 305.95,
  "pressure": 1021,
  "humidity": 19
  },
"visibility": 10000,

"wind": {
  "speed": 5.66,
  "deg": 320
},

"clouds": {
  "all": 1
},
"dt": 1627071440,

"sys": {
  "type": 1,
  "id": 3479,
  "country": "US",
  "sunrise": 1627043095,
  "sunset": 1627096642
},
"timezone": -21600,
"id": 5586437,
"name": "Boise",
"cod": 200
}
 */