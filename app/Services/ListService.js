import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {
  removeTask(id, taskName) {
    let list = store.State.lists.find((list) => list.id == id);
    let taskIndex = list.tasks.findIndex((t) => t == taskName);
    list.tasks.splice(taskIndex, 1);
  }
  addTask(id, newTask) {
    let found = store.State.lists.find((n) => n.id == id);
    found.tasks.push(newTask);
  }
  removeList(id) {
    store.State.lists = store.State.lists.filter((list) => list.id != id);
  }
  addList(newList) {
    let newListAdded = new List(newList);
    store.State.lists.push(newListAdded);
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
