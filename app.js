const express = require('express');
const app = express();
const path = require('path');
const { User, sequelize, Task } = require('./db');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use ('/api/users', require('./routes/users'));
app.use ('/api/tasks', require('./routes/tasks'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

module.exports = app;