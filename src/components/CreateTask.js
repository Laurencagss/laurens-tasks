import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CreateTask extends Component {
    constructor(){
        super();
        this.state = {
            taskName: '',
            userId: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(ev){
        ev.preventDefault();
        this.props.create(this.state.taskName, this.state.userId);
    }
render(){
    const { taskName, userId } = this.state;
    const { users } = this.props;
    return (
        <form onSubmit = { this.onSubmit }>
            <input 
            placeholder = 'enter task name' 
            value = { taskName } 
            onChange = { ev => this.setState({ taskName: ev.target.value }) }
            />
            <select value = { userId }
            onChange = {ev => this.setState ({ userId: ev.target.value })}>
                <option value="">Select User</option>
                {
                    users.map(user => {
                        return <option value = { user.id } key = { user.id }>
                            { user.firstName }
                        </option>
                    })
                }
            </select>
            <button disabled = { !taskName || !userId }>Create Task</button>
        </form>
    )

}
}
const mapDispatchToProps = (dispatch, otherProps) => {
    return {
        create: async (name, userId) => { 
            console.log('hello')
            const response = await axios.post('/api/tasks', { name, userId });
            dispatch ({ type: 'CREATE_TASK', task: response.data });
            otherProps.history.push('/tasks');
        }
    };
 };

export default connect(state => state, mapDispatchToProps)(CreateTask);