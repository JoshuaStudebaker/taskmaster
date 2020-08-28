import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  store.saveState();
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addTask() {
    event.preventDefault();
    let form = event.target;
    let newList = {
      name: form.name.value || "List Name",
      color: form.color.value || "sea-green",
    };
    ListService.addList(newList);
  }
}
