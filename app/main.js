import BgsController from "./Controllers/BgsController.js";

class App {
  bgsController = new BgsController()
}

window["app"] = new App();
