import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["output"];
  
  connect() {
    this.updateText()
  }
  
  updateText(){
    this.outputTarget.innerText = 'Hello from the BaseController'
  }
}
