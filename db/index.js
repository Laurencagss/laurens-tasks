const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/todo-app');
const Task = sequelize.define('task', {
    name: {
        type: Sequelize.STRING,   
    }
});
const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
    },
    
});

module.exports = {
    sequelize,
    Task,
    User
};