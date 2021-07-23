import { sandApiImages } from "../Services/AxiosService.js";

async function _draw(){
  try{
  const res = await sandApiImages.get()
  document.body.style.backgroundImage = `"url('${res.data.imgURL}')"`
  } catch (error){
    console.log('Er: getting bg-img')
  }
}

export default class BgsController{

  constructor(){
    _draw()
  }
}