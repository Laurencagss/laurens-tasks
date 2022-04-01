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

app.delete ('/api/:id', async(req, res,next) => {
    try {
        const user = await User.findByPk(req.params.id);
        await user.destroy()
       res.sendStatus(204);
    } catch (ex) {
        next(ex);
    }
});

module.exports = app;