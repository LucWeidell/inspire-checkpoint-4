import { sandApiImages } from "../Services/AxiosService.js";

async function _draw(){
  try{
  const res = await sandApiImages.get()
  document.body.style.backgroundImage = `url('${res.data.largeImgUrl}')`
  //document.getElementById('bg-auth').innerText = res.data.author
  } catch (error){
    console.log('Er: getting bg-img', error)
  }
}

export default class BgsController{

  constructor(){
    _draw()
  }
}