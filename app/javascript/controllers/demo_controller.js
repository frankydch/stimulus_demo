import { Controller } from "stimulus"
import BaseController from "./base_controller"

// export default class extends Controller  {
//   initialize() {
//     console.log(this.element)
//     console.log('initialize!')
//   }
//   connect() {
//     console.log('connect!')
//   }
//   disconnect() {
//     console.log('disconnect')
//   }
// }

// export default class extends Controller {
//   hello(e) {
//     console.log(e.currentTarget);
//     console.log('Event:', e);
//     console.log('hello by click!');
//   }
// }

// export default class extends Controller {
//   hello(e) {
//     console.log('Event:', e);
//     if (e.type == 'click') {
//       console.log('hello by click!');
//     } else {
//       console.log('hello by focus!');
//     }
//   }
// }

// export default class extends Controller {
//   static targets = [ "name", "output" ]

//   hello() {
//     this.outputTarget.textContent =
//       `Hello, ${this.nameTarget.value}!`
//   }
// }

// export default class extends Controller {
//   static targets = [ "name", "output" ]

//   hello() {
//       console.log(this.outputTargets);
//       this.outputTargets.forEach((t) => t.textContent = `hello ${this.nameTarget.value}!`);
//     }
//   }
  
// export default class extends Controller {
//   static targets = [ "messages" ]
  
//   connect() {
//     const url = this.data.get("url-messages");
//     console.log(url);
//   }

//   load() {
//     fetch(this.data.get("url-messages"))
//       .then(response => response.text())
//       .then(html => {
//         this.messagesTarget.innerHTML = html
//       })
//   }

//   print() {
//     fetch(this.data.get("url-users"))
//       .then(response => response.json())
//       .then(data =>
//         console.log(data)
//     )
//   }
// }

// export default class extends BaseController {
//   static targets = ["output"];

//   connect() {
//     super.connect();
//   }
//   updateText(){
//     this.outputTarget.innerText = 'Hello from the ChildController'
//   }
// }
