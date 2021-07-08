
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
const html = 
`<div class="card mb-4" style="width: 18rem;">
<div class="float-right">
  <button class="btn ${status === 'TODO'? 'todo-class': 'done-class'} float-right" style="width:35%">${status}</button>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"><strong>${name}</strong></li>
  <li class="list-group-item">Task Description: ${description}</li>
  <li class="list-group-item">Assigned To: ${assignedTo}</li>
  <li class="list-group-item">Due Date: ${dueDate}</li>
  <div class="row pl-3 float-right">
  <div data-task-id = "${id}"><button class="${status === 'DONE'? 'invisible-class': 'visible-class'} btn done-button btn-success float-right">Mark As Done</button></div>
  <div data-task-id = "${id}"><button class="btn delete-button btn-danger float-right">Delete</button></div>
  </div>
</ul>

</div>`

return html;
}

class TaskManager {
    constructor (currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask (name, description, assignedTo, dueDate, status='TODO') {
        this.currentId++;

        this.tasks.push({id: this.currentId, name, description, assignedTo, dueDate, status});
    }
    render(){
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++){
            let currentTask = this.tasks[i];
            let date = new Date(currentTask.dueDate);
            let formattedDate = date.toDateString();
            let taskHtml = createTaskHtml(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
            tasksHtmlList.push(taskHtml);
            
        }
        let tasksHtml = tasksHtmlList.join(' \n');
        const tasksList = document.getElementById('tasksList');
        tasksList.innerHTML = tasksHtml;
    }
    getTaskById(taskId){
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++){
            const task = this.tasks[i];
            
            if (task.id === taskId){
                foundTask = task;
                return foundTask;
            } 
        }
        
    }

    save(){
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        const currentId = String(this.currentId);
        localStorage.setItem('currentId', currentId);
    }
    load(){
        if (localStorage.getItem('tasks')){
           const tasksJson = localStorage.getItem('tasks');
           this.tasks = JSON.parse(tasksJson);
        }
        if (localStorage.getItem('currentId')){
            const currentId = localStorage.getItem('currentId');
            this.currentId = Number(currentId);
         }
    }
    deleteTask(taskId){
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i++){
            const task = this.tasks[i];
            if (task.id != taskId){
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;

    }

}


//module.exports = TaskManager;


