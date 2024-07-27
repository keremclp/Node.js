const mongoose = require('mongoose')

const TaskShema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name should 20 charachter']
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskShema)