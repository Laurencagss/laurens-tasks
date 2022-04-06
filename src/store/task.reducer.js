const tasks = (state = [], action) => {
    if(action.type === 'SET_TASKS') {
    return action.tasks;
    }
    if (action.type === 'DESTROY_TASK') {
state = state.filter(task => task.id !== action.id);
    }
    if (action.type === 'CREATE_TASK') {
state = [...state, action.task];
    }
    
    return state;
}

export default tasks;