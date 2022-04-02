const app = require('express').Router();
const { User } = require('../db');

app.get('/', async(req, res) => {
    try {
res.send(await User.findAll());

    }
    catch (ex) {
        console.log(ex);
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