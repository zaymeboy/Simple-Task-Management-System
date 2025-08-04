const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    owner: {
        type: String,
        require: true,
    }
});



const Task = mongoose.model('Task', taskSchema);
module.exports = Task;