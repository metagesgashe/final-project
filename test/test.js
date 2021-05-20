const { assert, expect } = require('chai');
const { describe, it } = require('mocha');
const TaskManager = require('../js/taskManager.js');

describe('task manager \n', () => {
    describe('addTask', () => {
      it('should return the task that is added', () => {
        const task = new TaskManager();
        const name = 'The first task';
        const description = 'The first description';
        const assignedTo = 'The first assigned to';
        const dueDate = '02/12/2021';
        //const result = {id: 1, name: 'The first task', description: 'The first description', assignedTo: 'The first assigned to', dueDate: 'The first due date', status: 'TODO'}
       task.addTask(name, description, assignedTo, dueDate)
       assert.ok(task.tasks.length === 1);
      });
    });
    
    describe('getTaskById', () => {
      it('should return a task with the given Id', () => {
        const task = new TaskManager();
        const taskId = 1;
// Adding a task
        const name = 'The first task';
        const description = 'The first description';
        const assignedTo = 'The first assigned to';
        const dueDate = 'The first due date';
      task.addTask(name, description, assignedTo, dueDate)
                 
      task.getTaskById(taskId);
      assert.ok(task.tasks[0]['id'] === 1)
      });
    });
    describe('deleteTask', () => {
      it('should return that a task is deleted', () => {
        const task = new TaskManager();
        const taskId = 1;
        
        // Adding a task
        const name = 'The first task';
        const description = 'The first description';
        const assignedTo = 'The first assigned to';
        const dueDate = 'The first due date';
      task.addTask(name, description, assignedTo, dueDate)

        task.deleteTask(taskId);
        assert.ok(task.tasks.length === 0)
      });
    });
    
    
  });
  