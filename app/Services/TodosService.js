import { ProxyState } from '../AppState.js'
import {sandApiTodo} from './AxiosService.js'


class TodosService {

  constructor(){}


  async getAllTodos() {
    const res = await sandApiTodo.get()
    console.log('Res from todo Getter:', res.data)
  }
}

export const todosService = new TodosService()