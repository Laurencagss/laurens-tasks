const app = require('express').Router();
const { Task } = require('../db');

app.get('/', async(req, res) => {
    try {
res.send(await Task.findAll());

    }
    catch (ex) {
        console.log(ex);
    }
});

app.post ('/', async(req, res,next) => {
    try {
    res.status(201).send(await Task.create(req.body));
    } catch (ex) {
        next(ex);
    }
});


app.delete ('/:id', async(req, res,next) => {
    try {
        const task = await Task.findByPk(req.params.id);
        await task.destroy()
       res.sendStatus(204);
    } catch (ex) {
        next(ex);
    }
});

module.exports = app;