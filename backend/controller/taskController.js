const Task = require('../models/Task');

const asyncHandler = require('express-async-handler');

//add task
const addTask = asyncHandler(async (req, res) => {
    const { title, description, status } = req.body;
    const owner = req.user._id;
    console.log(owner);
    const task = await (Task.create({title, description, status, owner}));
    if (task) {
        res.status(201).json({
            success: true,
            message: 'Task added successful!',
            task_id: task._id
        });
    } else {
        res.status(400).json({ success: false, message: 'Task not added !' });
    }
});

//update task

const updateTask = asyncHandler(async(req ,res)=>{
    const { title, description, status } = req.body;
    const {id} = req.params;

    const task = await Task.findByIdAndUpdate(
        id , 
        {title, description, status}
    );
    if (task){
        res.status(200).json({
            success: true,
            message: 'Task updated',
            task_id: task._id
        });
    }else{
        res.status(400).json({success:false , message: 'Task not found!'});
    }
});

//delete task
const deleteTask = asyncHandler(async(req ,res)=>{
    const {id} = req.params;

    const task = await Task.findByIdAndDelete(id);
    if (task){
        res.status(200).json({
            success: true,
            message: 'Task deleted'
        });
    }else{
        res.status(400).json({success:false , message: 'Task not found!'});
    }
});

const getTask = asyncHandler(async(req, res)=>{
    const id= req.user._id;
    //console.log(id);
    const task = await Task.find({owner: id}).select('-__v -owner');
    if(task && task.length > 0){
        res.status(200).json({
            success: true,
            data: task
        });
    }else{
        res.status(400).json({success: true , message: "No task"});
    }
});



module.exports ={addTask, updateTask ,deleteTask, getTask};