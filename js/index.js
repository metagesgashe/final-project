let task = new TaskManager()  
task.load()
task.render()

const newTaskNameInput = document.getElementById('newTaskNameInput');
const taskName = newTaskNameInput.value;

const newTaskDescription = document.getElementById('newTaskDescriptionInput');
const description = newTaskDescription.value;

const newAssignedToInput = document.getElementById('newAssignedToInput');
const assigned = newAssignedToInput.value;

const newDueDateInput = document.getElementById('newDueDateInput');
const dueDate = newDueDateInput.value;

const submit = document.getElementById('newButtonInput');




const form = document.getElementById('form');
const errorMessage = document.getElementById('error');


submit.addEventListener('click', function(e) {
    e.preventDefault();
    const taskName = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assigned = newAssignedToInput.value;
    const dueDate = newDueDateInput.value;
    const tasksList = document.getElementById('tasksList'); 

    let messages = []
    if (taskName === '' || description === '' || assigned === '' || dueDate === ''){
    
        messages.push("<strong>*Input required!</strong> You should fill all the required fields before you proceed to the next step.");
        
    }
   
    if (messages.length > 0){
        
        errorMessage.innerHTML = messages.join(', ')
        errorMessage.style.display = 'block';
        tasksList.style.display = 'none';
    } else {
        task.addTask(taskName, description, assigned, dueDate);
        task.save()
        task.render();

        errorMessage.style.display = 'none';
        tasksList.style.display = 'block';
        form.reset()
    };  
});

const tasksList = document.getElementById('tasksList');
tasksList.addEventListener('click', (event) => { 
    // "event" here is the event parameter
    if (event.target.classList.contains('done-button')){
        const parentTask = event.target.parentElement;
        const taskId = parseInt(parentTask.dataset.taskId);
        const taskCard = task.getTaskById(taskId)
       
      
        taskCard.status = 'DONE';
        task.save()
        task.render();
    }
    

    if (event.target.classList.contains('delete-button')){
        const parentTask = event.target.parentElement;
        const taskId = parseInt(parentTask.dataset.taskId);
        task.deleteTask(taskId);
        task.save()
        task.render()
    }

    

});

