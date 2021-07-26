import { ProxyState } from '../AppState.js'
import Todo from '../Models/Todo.js'
import {sandApiTodos} from './AxiosService.js'



class TodosService {


  constructor(){}


  async getAllTodos() {
    const res = await sandApiTodos.get()
    console.log('Res from todo Getter:', res.data)
    ProxyState.todos = res.data.map(t=> new Todo(t))
  }

  async addTodo(rawTodo) {
    console.log('To do to pass', rawTodo)
    const res = await sandApiTodos.post('', new Todo(rawTodo))
    console.log('responce: adding to do:', res.data)
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async deleteTodo(id) {
    debugger
    let removeTodo = ProxyState.todos.find(t=> t.id == id)
    console.log('To do to remove', removeTodo)

    const res = await sandApiTodos.delete('/'+removeTodo.id)
    console.log('responce: removing to do:', res.data)
    //FIXME at re trigger proxy state: confirm responce is good
    //ProxyState.todos = ProxyState.todos.filter(t=> t.id != id)
  }

  async flipSelect(id){
    let flipTodo = ProxyState.todos.find(t=> t.id == id)
    flipTodo.flipSelect()
    const res = await sandApiTodos.put('/' + flipTodo.id, flipTodo)
    console.log('flipped checked status', res.data)
    //FIXME at re trigger proxy state: confirm responce is good// confirmed
    ProxyState.todos = ProxyState.todos
  }
}

export const todosService = new TodosService()