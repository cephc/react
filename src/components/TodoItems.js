import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItems extends Component {
    theStyle = () => {
      return{
          background: '#add8e6',
          textDecoration: this.props.list.completed ? 'line-through' : 'none',
          padding: '20px',
          borderBottom: '2px solid pink'
      }
    }

    render() {
        const { id, title } = this.props.list;
        return (
            <div style={this.theStyle()}>
                <p>
                    <input type = "checkbox" onChange = {this.props.isCompleted.bind
                    (this, id)}/> {'  '}
                    { title }
                    <button onClick={ this.props.deleteTodo.bind(this, id)} style={btnStyle}> X </button>
                </p>
            </div>

        )
    }
}
TodoItems.propTypes = {
    list: PropTypes.object.isRequired,
    isCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
    }
const btnStyle = {
    background: '#ffb6c1',
    color: '#000000',
    border: 'none',
    padding: '2px 8px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItems
