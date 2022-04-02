import React from 'react';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ users, tasks}) => {
    return (
       <nav>
              <Link to="/">Home</Link>
           <Link to = "/tasks">Tasks ({ tasks.length}) </Link>
              <Link to = "/users">Users ({users.length}) </Link>
       </nav>
    );
};

const mapState = (state) => {
    return {
tasks: state.tasks,
users: state.users
    };
};



export default connect(mapState)(Nav);