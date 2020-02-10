//npm init -y
//npm i express
//npm i morgan
//npm i -D nodemon
//npm i uuidv4

const express = require('express');
const app = express();
const logger = require('morgan');
const users = require('./models/Users')
const port = process.env.PORT || '3000';
const userRoutes = require('./routes/userRoutes')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api/users', userRoutes);



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
