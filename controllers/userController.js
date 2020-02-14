const uuid = require('uuid/v4');

const users = require('../models/Users');
module.exports = {
    getAllUsers : (req, res) => {
      res.json(users); 
      
    },
    getUserById : (req, res) => {
        res.send('getUserById')
      },
    createUser : (req, res) => {
        res.send('createUser')
      },
      updateUser: (req, res) => {
        res.send('updateUser')
      },
      
    deleteUser : (req, res)=>{
     res.send('deleteUser')
}
}