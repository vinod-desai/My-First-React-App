import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import About from './Components/pages/About';
import Search from './Components/pages/Search';
import uuid from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learn React',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Watch Movie',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Play Cricket',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Talk to girlfriend',
        completed: true
      }
    ]
  };

  toggleComplete = (id) => {
    // console.log(id);
    this.setState({ todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
    }) });
  }

  deleteTodo = (id) => {
    // console.log(id);
    this.setState({todos: [...this.state.todos.filter((todo) => {
      return todo.id !== id;
    })] })
  }

  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    // console.log(`Todos: ${this.state.todos}`);
    // console.log(this.state.todos);
    return (
      <Router>
      <div className="App">
        {/* --JSX
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </header> */}
          <div className='container'>
            <Header />
            <Route exact path='/' component={Search} />
            <Route path='/todo' render={ props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} 
                deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
