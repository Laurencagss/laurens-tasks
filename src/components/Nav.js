import React from 'react';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ users, tasks, usersWithoutTasks}) => {
    return (
       <nav>
              <Link to="/">Home</Link>
           <Link to = "/tasks">Tasks ({ tasks.length}) </Link>
           <Link to = "/tasks/create">Create Task</Link>
              <Link to = "/users">Users ({users.length}) </Link>
              <Link to= "/users/without-tasks">Users without tasks ({usersWithoutTasks.length}) </Link>
       </nav>
    );
};

const mapState = (state) => {
   const usersWithoutTasks = state.users.filter(user => {
       return state.tasks.filter( task => task.userId === user.id).length === 0;
   });
    return {
tasks: state.tasks,
users: state.users,
usersWithoutTasks
    };
};



export default connect(mapState)(Nav);