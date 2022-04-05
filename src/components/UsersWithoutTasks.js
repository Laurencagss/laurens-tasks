import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
    return (
       <div>
        <ul>
       {
           users.map( user => {
           return (
                <li key = {user.id}> 
                <Link to = {`/users/${user.id}`}> { user.firstName } (0)</Link>
             </li>
              )
           })
         }
       </ul>
         </div>
    );
        };

  const mapStateToProps = (state) => {
    const usersWithoutTasks = state.users.filter(user => {
        return state.tasks.filter( task => task.userId === user.id).length === 0;
    });
    return {
        users: usersWithoutTasks,

    };
  };

export default connect ( mapStateToProps )(Users);