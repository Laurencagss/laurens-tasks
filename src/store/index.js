import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import tasks from './task.reducer.js';
import users from './user.reducer.js';

    const reducer = combineReducers({
        tasks: tasks,
        users: users
    });

    const store= createStore(reducer, applyMiddleware(logger));

    export default store;