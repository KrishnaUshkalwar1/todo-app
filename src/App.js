import {Component} from 'react';
import {v4 as uuidv4} from 'uuid'


import TodoItem from './components/TodoItem/todoItem';

import './App.css';

class App extends Component {
  state = {todosList: [], inputValue: '', count: 0}

  editTodo = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  deleteTodo = (id) => {
    const {todosList} = this.state 
    const filteredTodos = todosList.filter(eachTodo => eachTodo.id !== id);
    this.setState({todosList: filteredTodos});
  }

  addTodoInTodoList = () => {
    const {todosList, inputValue} = this.state;
    if (inputValue[inputValue.length - 1] == parseInt(inputValue[inputValue.length - 1])){
      for(let i=0; i<parseInt(inputValue[inputValue.length - 1]); i++) {
        todosList.push({id: uuidv4(), todoName: inputValue.slice(0, inputValue.length-1)});
      }
    }
    else {
      todosList.push({id: uuidv4(), todoName: inputValue});
    }
    
    this.setState({inputValue: ''}); 
  }

  onChangeInputValue = (event) => {
    this.setState({inputValue: event.target.value})
  }

  render(){
    const {todosList, inputValue, count} = this.state
  
    return (
      <div className="todo-bg-container">
          <div className="todo-card-container">
              <h1 className="todo-card-title">Day Goals!</h1>
              <input  className="todo-card-input" placeholder="Write your todo" value={inputValue} onChange={this.onChangeInputValue}/>
              <button className="todo-card-button" onClick={this.addTodoInTodoList}>Add Todo</button>
              <ul className='todo-item-list-container'>
                {todosList.map(eachTodo => <TodoItem key={uuidv4()} todoDetails={eachTodo} count={count} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/> )}
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
