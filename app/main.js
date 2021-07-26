import BgsController from "./Controllers/BgsController.js";
import ClocksController from "./Controllers/ClocksController.js";
import WeathersController from "./Controllers/WeathersController.js";


class App {
  bgsController = new BgsController()
  weathersController = new WeathersController()
  clocksController = new ClocksController()
}

window["app"] = new App();
