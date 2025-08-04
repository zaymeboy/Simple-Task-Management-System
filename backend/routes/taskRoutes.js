const express = require('express');
const router = express.Router();

//untuk authenticate user
const {authUser} = require('../middeware/authUser');

const {
    addTask, updateTask, deleteTask,getTask
} = require('../controller/taskController');

/*
router.route('/addtask').post(addTask);
router.route('/updatetask/:id').put(updateTask);
router.route('/deletetask/:id').delete(deleteTask);
router.route('/gettask/:id').get(getTask);
*/

/*
router.post('/',authUser,addTask);
router.get('/:id',authUser,getTask);
router.put('/:id',authUser,updateTask);
router.delete('/:id',authUser,deleteTask);
*/
router.post('/',authUser,addTask);
router.get('/',authUser,getTask);
router.put('/',authUser,updateTask);
router.delete('/',authUser,deleteTask);

module.exports = router;