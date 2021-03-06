import { generateId } from "../utils.js";

export default class List {
  constructor({ name, color, tasks = [], id }) {
    this.name = name;
    this.color = color;
    this.tasks = tasks;
    this.id = id || generateId();

    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return `
    <div class="col-12 col-md-4 my-2">
          <div class="card p-2 shadow border-${this.color}">
            <div class="card-header ${this.color} shadow mb-1">
              ${this.name}
              <i
                class="fas fa-dumpster-fire hue-delete"
                onclick="app.listController.removeList('${this.id}')"
              ></i>
            </div>
            <ul class="list-group list-group-flush no-bottom-border tasks">
              ${this.TasksTemplate}
            </ul>
            <div class="card-footer shadow mt-1">
              <form onsubmit="app.listController.addTask('${this.id}')">
                <div class="form-row">
                  <div class="form-group col-9 text-right">
                    <input
                      type="text"
                      class="form-control"
                      name="submitTask"
                      id="submitTask"
                      placeholder="Enter Task..." required
                    />
                  </div>
                  <div class="text-right form-group col-3">
                    <button
                      type="submit"
                      class="btn btn-primary btn-sm ${this.color} border-${this.color}-darker"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    `;
  }

  get TasksTemplate() {
    let template = "<li class='list-group-item d-none'>Add a task</li>";
    this.tasks.forEach(
      (t) =>
        (template += `
        <li class="list-group-item">
                <input type="checkbox" />
                ${t}
                <i class="fas fa-trash hue-delete" onclick="app.listController.removeTask('${this.id}','${t}')"></i>
              </li>
                   
        `)
    );
    return template;
  }
}
