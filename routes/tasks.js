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
    res.sendStatus(201),send(await Task.create(req.body));
    } catch (ex) {
        next(ex);
    }
});


app.delete ('/:id', async(req, res,next) => {
    try {
        const user = await User.findByPk(req.params.id);
        await user.destroy()
       res.sendStatus(204);
    } catch (ex) {
        next(ex);
    }
});

module.exports = app;