import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


function _drawBoxTODO(){
  let allTodo = ProxyState.todos
  let finTodo = allTodo.filter(t => t.completed).length
  let template = ''
  template += /*html*/ `
  <div class="col-md-4 shadow-lg mt-3 mx-2 ">
    <div class="row">
      <div class="col-md-12 text-center bg-blue">
        <h4>To Do: Get on it!</h4>
        <p>${finTodo} / ${allTodo.length}</p>
     <div class="row bg-white" id ="tasks">
     ${allTodo.length==0 ? 'No tasks' : allTodo.forEach(t => t.Template)}
     </div>
     <div class="col d-flex justify-content-center mt-1 p-0 mx-0">
       <form class= "d-flex" onsubmit="app.todosController.addTodo()">
         <input required type="text" name="todoDesc" placeholder="Add Task ...." minlength="3" maxlength="50">
         <button type="submit" class="btn btn-outline-success">+</button>
       </form>
     </div>
  `
  document.getElementById('taskBox').innerHTML = template
}

export default class TodosController {

  constructor(){
    ProxyState.on('todos', _drawBoxTODO)


    this.getAllTodos()
    _drawBoxTODO()
  }

  async getAllTodos() {
    try {
      await todosService.getAllTodos()
    } catch (error) {
      console.log('Er: Getting todo from Sand,', error)
    }
  }

  async addTodo(){
    try {
      event.preventDefault()
      let todo = event.target
      console.log('event to add', todo)
      // FIXME look at this again
      let rawTodo = {
        description: todo.name.value
      }
      await todosService.addTodo(rawTodo);
      todo.reset()

    } catch (error) {
      console.log('Er: Adding todo to Sand,', error)
    }
  }
}