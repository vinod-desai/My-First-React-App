import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todos extends Component {

  getStyle = (todo) => {
    /* if ( todo.completed) {
      return {
        textDecoration: 'line-through'
      }
    } else {
      return {
        textDecoration: 'none'
      }
    } */
    return {
      textDecoration: todo.completed ? 'line-through' : 'none',
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  };

  /* toggleComplete = (todo, e) => {
    console.log(todo);
  }; */

  render() {
    // console.log(this.props.todos);
    return this.props.todos.map( (todo) => (
          <div key={ todo.id } style={ this.getStyle(todo) }>
            <p> <input type="checkbox" onChange={ this.props.toggleComplete.bind(this, todo.id) } />  
                { ' ' } { todo.title }
                <button style = {btnStyle} className='pull-right' onClick = { this.props.deleteTodo.bind(this, todo.id)}><span className="glyphicon glyphicon-trash"></span></button>
            </p>
          </div>
    )
    );
  }
}

//propTypes - define properties required/not for each component
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

/*
const itemStyle = {
  backgroundColor: '#f4f4f4'
} */

const btnStyle = {
  /* background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right' */
}

export default Todos;
