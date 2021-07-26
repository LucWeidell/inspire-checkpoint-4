
function _updateClock12(){
  let template = ''
  let currentTime = new Date()
  template += /*html*/ `
    <h1>${currentTime.toLocaleTimeString()}</h1>
    <h3>Good Day, User</h3>
  `
  document.getElementById('clock').innerHTML = template

}

// NOTE can add this for day status
// function _getDayStatus(time){
//   if(time.getHours() > )
// }

export default class ClocksController{

  constructor(){
    _updateClock12()
    this.clock = setInterval(_updateClock12, 60000)
  }

  //NOTE can write a update _updateClock24
  //It would clear the this.clock and set it setInterval(_updateClock24, 60000)



}