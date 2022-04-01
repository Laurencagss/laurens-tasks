const express = require('express');
const app = express();
const path = require('path');
const { Task, User, sequelize } = require('./db');


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;
app.listen (port, () => console.log(`Listening on port ${port}`));

const init = async() => {
    console.log('Initializing database...');
    await sequelize.sync({ force: true });
};

    init();
