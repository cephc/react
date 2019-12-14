import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({title: e.target.value});

    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    render() {
        return (
            <form onSubmit = {this.submit} style = {{display: 'flex'}}>
                <input placeholder = "Add a To Do..." type = "text" name = "title" style = {{flex: '10', padding: '6px', background: '#add8e6'}} value = {this.state.title} onChange = {this.onChange}/>
                <input type = "submit" value = "Add" className = "btn" style = {{flex: '1'}}/>
            </form>
        )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.object.isRequired
  }

export default AddTodo
