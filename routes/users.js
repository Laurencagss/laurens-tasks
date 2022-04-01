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

module.exports = app;