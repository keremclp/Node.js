const mongoose = require('mongoose')

const TaskShema = new mongoose.Schema({
    name: String,
    completed: Boolean,
})

module.exports = mongoose.model('Task', TaskShema)