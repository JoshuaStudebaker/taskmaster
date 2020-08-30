import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  store.saveState();
  let template = "";
  store.State.lists.forEach((list) => (template += list.Template));

  document.getElementById("list").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList() {
    event.preventDefault();
    let listForm = event.target;
    // @ts-ignore
    if (listForm.color.value == "Choose colors...") {
      prompt("Please choose a color");
    }
    // @ts-ignore
    if (listForm.color.value != "Choose colors...") {
      let newList = {
        // @ts-ignore
        name: listForm.name.value,
        // @ts-ignore
        color: listForm.color.value,
      };
      console.log(newList);
      ListService.addList(newList);
    }
    _drawLists();
  }

  removeList(id) {
    if (window.confirm("Do you really want to delete?")) {
      ListService.removeList(id);
    }
    _drawLists();
  }

  addTask(id) {
    event.preventDefault();
    let taskForm = event.target;
    // @ts-ignore
    let newTask = taskForm.submitTask.value;
    console.log(newTask);
    ListService.addTask(id, newTask);
    _drawLists();
  }

  removeTask(id, taskName) {
    if (window.confirm("Do you really want to delete?")) {
      ListService.removeTask(id, taskName);
    }
    _drawLists();
  }
}
