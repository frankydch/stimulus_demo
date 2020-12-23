import { Controller } from "stimulus"
import ParentController from "./parent_controller"

export default class extends Controller  {
  initialize() {
    console.log(this.element)
    console.log('initialize!')
  }
  connect() {
    console.log('connect!')
  }
  disconnect() {
    console.log('disconnect')
  }
}




// export default class extends Controller {
//   hello(e) {
//     console.log('Event:', e);
//     console.log('hello by click!');
//   }
// }
  
  
// export default class extends Controller {
//   hello(e) {
//     // console.log('Event:', e);
//     console.log(e.currentTarget);
//     if (e.type == 'click') {
//       console.log('hello by click!');
//     } else if (e.type == 'input') {
//         console.log('hello by input!');
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
//     console.log(this.outputTargets);
//     this.outputTargets.forEach((t) => t.textContent = `hello ${this.nameTarget.value}!`);
//   }
// }
  









// export default class extends Controller {
//   static values = { 
//     messages: String,
//     users: String
//   }
//   static targets = [ "messages" ]
  
//   connect() {
//     // const url = this.data.get("url-messages");
//     console.log(this.messagesValue);
//   }

//   load() {
//     // this.usersValue = "https://jsonplaceholder.typicode.com/users/2"
//     fetch(this.messagesValue)
//       .then(response => response.text())
//       .then(html => {
//         this.messagesTarget.innerHTML = html
//       })
//   }

//   print() {
//     fetch(this.usersValue)
//       .then(response => response.json())
//       .then(data =>
//         console.log(data)
//     )
//   }

//   // usersValueChanged() {
//   //   this.print()
//   // }
// }








// export default class extends Controller {
//   static values = { users: String }
//   static targets = [ "button" ]
//   static classes = [ "printed" ]

//   print() {
//     fetch(this.usersValue)
//       .then(response => response.json())
//       .then(data =>
//         console.log(data),
//         this.buttonTarget.classList.add(this.printedClass)
//     )
//   }
// }







// export default class extends ParentController {
//   static targets = ["element"];

//   connect() {
//     super.connect();
//   }
  
//   updateText(){
//     this.elementTarget.innerText = 'Hello from the ChildController'
//   }
// }
