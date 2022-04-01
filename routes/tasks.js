const app = require('express').Router();
const { Task } = require('../db');

app.get('/api/tasks', async(req, res) => {
    try {
res.send(await Task.findAll());

    }
    catch (ex) {
        console.log(ex);
    }
});

module.exports = app;