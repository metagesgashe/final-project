let task = new TaskManager()  
task.load()
task.render()

//task.addTask('task 1', 'description 1', 'assigned to 1', 2021)
//console.log(task.tasks)

//task.addTask('task 2', 'description 2', 'assigned to 2', 2022)
//console.log(task.tasks)




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
    

    task.addTask(taskName, description, assigned, dueDate);
    // console.log(task.tasks);
    //console.log(task.tasks.length);
    //console.log(task.tasks[0]['id']);
    
    task.save()
    task.render();
    

   

    let messages = []
    if (taskName === '' || description === '' || assigned === '' || dueDate === ''){
    
        messages.push("<strong>Input required!</strong> You should file all the required fields before you proceed to the next step.");
        
    }
   
    if (messages.length > 0){
        
        errorMessage.innerHTML = messages.join(', ')
        errorMessage.style.display = 'block';
        tasksList.style.display = 'none';
    } else {
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
        //const taskId = parseInt(parentTask.getAttribute('data-task-id'));
        // the variable name in the walk through is task. we use taskCard
        const taskCard = task.getTaskById(taskId)
       
      
        taskCard.status = 'DONE';
        task.save()
        task.render();
        //hide the button
        // const button = document.querySelector('.done-button')
        // button.style.display = 'none';
    }
    

    if (event.target.classList.contains('delete-button')){
        const parentTask = event.target.parentElement;
        const taskId = parseInt(parentTask.dataset.taskId);
        task.deleteTask(taskId);
        task.save()
        task.render()
    }

    

});

