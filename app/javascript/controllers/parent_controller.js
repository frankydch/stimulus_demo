import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["element"];
  
  connect() {
    this.updateText()
  }
  
  updateText(){
    this.elementTarget.innerText = 'Hello from the ParentController'
  }
}
