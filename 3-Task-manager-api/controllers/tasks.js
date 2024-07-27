const Task = require('../models/Task')


const getAllTasks = async (req,res) =>{
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}
const getTask = async (req,res) =>{
    try {
        const { id: taskID } = req.params
        const singleTask = await Task.findOne({ _id: taskID })
        if(!singleTask) {
            return res.status(404).json({ msg: 'Task not found' })
        }
        res.status(200).json({singleTask})
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}
const updateTask = (req,res) =>{
    res.send('update item')

}
const deleteTask = (req,res) =>{
    res.send('delete item')

}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}