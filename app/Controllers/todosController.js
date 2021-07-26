import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


function _drawBoxTODO(){
  let allTodo = ProxyState.todos
  let finTodo = allTodo.filter(t => t.completed).length
  let template = ''
  template += /*html*/ `
  <div class="col-md-4 shadow-lg mt-3 mx-2 ">
    <div class="row">
      <div class="col-md-12 text-center task-box">
        <h4>To Do: Get on it!</h4>
        <p>${finTodo} / ${allTodo.length}</p>
      </div>
    </div>
    <div class="row tasks" id ="tasks">`
     if(allTodo.length==0){
     template += `<p class="ml-2">No tasks</p>`
    } else {
      allTodo.forEach(t => template += t.Template)
    }
    template += /*html*/ `
    </div>
    <div class ="row tasks">
      <div class="col d-flex justify-content-center mt-1 p-0 mx-0">
        <form class= "d-flex" onsubmit="app.todosController.addTodo()">
          <input required class= "tasks" type="text" name="" id="todoDesc" placeholder="Add Task ...." minlength="3" maxlength="50">
          <button type="submit" class="btn btn-outline-success">+</button>
        </form>
      </div>
    </div>
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
      let rawTodo = {
        description: todo.todoDesc.value
      }
      await todosService.addTodo(rawTodo);
      todo.reset()

    } catch (error) {
      console.log('Er: Adding todo to Sand,', error)
    }
  }

  async deleteTodo(id) {
    try {
      await todosService.deleteTodo(id)
    } catch (error) {
      console.log('Er: Getting todo from Sand,', error)
    }
  }

  async flipSelect(id) {
    try {
      await todosService.flipSelect(id)
    } catch (error) {
      console.log('Er: Flipping completed task status (id, error),', id, error)
    }
  }
}