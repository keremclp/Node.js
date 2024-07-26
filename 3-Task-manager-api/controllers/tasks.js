

const getAllTasks = (req,res) =>{
    res.send('get all items')
}

const createTask = (req,res) =>{
    res.send('create item')

}
const getTask = (req,res) =>{
    res.send('get single item')

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