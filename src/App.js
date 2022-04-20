import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';




function App() {

  const [todos, setTodos] = useState([]);


  const addTodoList = (input) => {
axios.post('https://jsonplaceholder.typicode.com/todos', {title: input, completed: false})
.then((response)=>{
  const newTodo = {
    id: uuidv4(),
    title: input,
    completed: false
  }
 setTodos([...todos, newTodo])
})

   
  }
  const checkHandler = (id) => {
    setTodos(todos.map(todo=>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

  const deleteHandler = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response)=>{
      setTodos(todos.filter((todo)=>{
        return todo.id !== id
      }
      ))
    })
    
    
  }
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response)=>{
      console.log('response.data')
      setTodos(response.data)
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <AddTodo addTodoList={addTodoList}  />
      <Todos 
      todos={todos} 
      checkHandler={checkHandler}
      deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default App;
