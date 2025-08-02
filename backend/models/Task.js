const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desciption: {
        type: String
    },
    status: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    }
});



const Task = mongoose.model('Task', userSchema);
module.exports = Task;