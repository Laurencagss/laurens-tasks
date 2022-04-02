import {createStore, combineReducers} from 'redux';
 const tasks = (state = [], action) => {
     return state;
    }
    const users = (state = [], action) => {
        return state;
    }

    const reducer = combineReducers({
        tasks: tasks,
        users: users
    });

    const store= createStore(reducer);

    export default store;