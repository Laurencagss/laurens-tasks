import React from 'react';
import { connect } from 'react-redux';

const UserTasks = ({ users, tasks, match }) => {
    return (
       <div>
             <h2>User Tasks</h2>
       <ul>
       {
           tasks.filter(task => task.userId === match.params.id*1).map( task => {
              const user = users.find(user => user.id === task.userId);
           return (
                <li key = {task.id}> { task.name } ({user ? user.firstName: ''}) </li>
              )
           })
         }
       </ul>
         </div>
    );
        };

export default connect ( state => state)(UserTasks);