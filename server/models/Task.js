const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task : String,
    done: {
        type : Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', todoSchema);

module.exports = Task;
