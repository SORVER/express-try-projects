const { get } = require("../routes/tasks");
const Task = require('../models/task')
const getAllTasks = (request, response) => {
    response.json(request.body)
}

const createTask = async (request, response) => {
    const task = await Task.create(request.body);
    response.status(201).json({task});
}
const deleteTask = (request, response) => {
    response.send('hello from Tasks');
}
const updateTask = (request, response) => {
    response.send('hello from Tasks');
}

const getTask = (request, response) => {
    response.send('hello from Tasks');
}


module.exports = {
    getAllTasks, getTask,createTask,updateTask,deleteTask
}