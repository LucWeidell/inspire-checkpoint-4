import BgsController from "./Controllers/BgsController.js";
import ClocksController from "./Controllers/ClocksController.js";
import TodosController from "./Controllers/todosController.js";
import WeathersController from "./Controllers/WeathersController.js";


class App {
  bgsController = new BgsController()
  weathersController = new WeathersController()
  clocksController = new ClocksController()
  todosController = new TodosController()
}

window["app"] = new App();
