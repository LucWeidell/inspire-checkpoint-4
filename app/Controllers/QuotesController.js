import { sandApiQuotes } from "../Services/AxiosService"

async function _draw(){
  const res = await sandApiQuotes.get()
  console.log('quote return response,', res.data)
  let template = /*html*/
  `
  <div class="text-center mt-5">
    <h4>${res.data.content}</h4>
    <div class="answer">
        <p>${this.res.data.author}</p>
    </div>
  </div>
  `
  document.getElementById('quote').innerHTML = template

}

export default class QuotesController{

  constructor(){
    _draw()
  }
}