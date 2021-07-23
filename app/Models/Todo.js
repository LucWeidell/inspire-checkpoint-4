
export default class Todo {

  constructor({id, completed, user, description}){
    // NOTE Our adder code gives this
    this.description = description;

    // NOTE read form server
    this.id = id;
    this.completed = completed;
    this.user = user;
  }

  //Only need on template and changes on the if completed:
    //All will have delete button: in line ternary
  get Template() {
    return /*html*/`
    <div class="col-md-12 d-flex justify-content-between">
      <div class="form-group form-check" onchange="app.todosController.flipSelect('${this.completed}')" >
        <input type="checkbox" class="form-check-input" id="testCheck" ${this.completed ? 'checked' : ''}>
        <label class="form-check-label" for="testCheck">'${this.description}'</label>
      </div>
      <span class="action" onclick="app.todosController.deleteTask('${this.id}')">X</span>
    </div>
    `

  }

}


/**
 * {
    //NOTE Do nothing!!! the server will create these properties for you

    id: {type: String, required: true, unique: true }
    completed: { type: Boolean, required: true, default: false},
    user: { type: String, required: true },

    //TODO You will need to provide a description
    description: { type: String, required: true},
}
 */