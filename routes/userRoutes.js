const express = require('express');
const router = express.Router();
const users = require('../models/Users');
const uuid = require('uuid/v4');
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers)

router.get('/:id', userController.getUserById)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router;