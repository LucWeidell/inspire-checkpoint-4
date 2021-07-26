import BgsController from "./Controllers/BgsController.js";
import WeathersController from "./Controllers/WeathersController.js";

class App {
  bgsController = new BgsController()
  weathersController = new WeathersController()
}

window["app"] = new App();
