const Task = require('../models/task');

const getAllTasks = async (request, response) => {
    try {
        const tasks = await Task.find({});
        response.status(200).json({ tasks });
    } catch (error) {
        response.status(500).json({ msg: error });
    }
};

const createTask = async (request, response) => {
    try {
        const task = await Task.create(request.body);
        response.status(201).json({ task });
    } catch (error) {
        response.status(500).json({ msg: error });
    }
};

const deleteTask = async (request, response) => {
    try {
        const task = await Task.findByIdAndDelete(request.params.id);
        if (!task) {
            return response.status(404).json({ msg: `No task with id: ${request.params.id}` });
        }
        response.status(200).json({ task });
    } catch (error) {
        response.status(500).json({ msg: error });
    }
};

const updateTask = async (request, response) => {
    try {
        const task = await Task.findByIdAndUpdate(
            request.params.id,
            
            request.body,
            { new: true, runValidators: true }
        );
        if (!task) {
            return response.status(404).json({ msg: `No task with id: ${request.params.id}` });
        }
        response.status(200).json({ task });
    } catch (error) {
        response.status(500).json({ msg: error });
    }
};

const getTask = async (request, response) => {
    try {
        const task = await Task.findById(request.params.id);

        if (!task) {
            return response.status(404).json({ msg: `No task with id: ${request.params.id}` });
        }
        response.status(200).json({ task });
    } catch (error) {
        response.status(500).json({ msg: error });
    }
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};