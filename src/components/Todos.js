import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {
 
    render() {
        return this.props.todos.map((list) => (
        <TodoItems key={list.id} list ={list} isCompleted = {this.props.isCompleted} deleteTodo = {this.props.deleteTodo}/> 
        ));
      }      
    }
  Todos.propTypes = {
      todos: PropTypes.array.isRequired,
      isCompleted: PropTypes.func.isRequired,
      deleteTodo: PropTypes.func.isRequired,
    }
export default Todos;