import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


function _draw(){
  let template = ''
  ProxyState.todos.forEach(t => template += t.Template );
}

export default class todosController {

  constructor(){
    ProxyState.on('todos', _draw)

    this.getAllTodos()
  }

  async getAllTodos() {
    try {
      await todosService.getAllTodos()
    } catch (error) {
      console.log('Er: Getting todo from Sand,', error)
    }
  }
}