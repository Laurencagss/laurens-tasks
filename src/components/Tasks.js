import React from 'react';
import { connect } from 'react-redux';

const Tasks = ({ users, tasks }) => {
    return (
       <ul>
       {
           tasks.map( task => {
              const user = users.find(user => user.id === task.userId);
           return (
                <li key = {task.id}> { task.name } ({user ? user.firstName: ''}) </li>
              )
           })
         }
       </ul>
    );
        };

export default connect ( state => state)(Tasks);