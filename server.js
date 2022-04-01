const express = require('express');
const path = require('path');
const { Task, User, sequelize } = require('./db');
const app = require('./app');

const port = process.env.PORT || 3000;
app.listen (port, () => console.log(`Listening on port ${port}`));

const init = async() => {
    console.log('Initializing database...');
    await sequelize.sync({ force: true });
    const [lucy,moe, ethyl,] = await Promise.all([
User.create ({ firstName: 'Moe'}),
User.create ({ firstName: 'Etyhl'}),
User.create ({ firstName: 'Lucy'}),
    ]);
    await Promise.all([
Task.create ({ name: 'Walk dog', userId: lucy.id}),
Task.create ({ name: 'Eat food' , userId: moe.id}),
Task.create ({ name: 'Workout' , userId: ethyl.id}),
    ]);
};

Task.belongsTo(User);

    init();
