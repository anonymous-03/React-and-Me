import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/Todoform'
import TodoContext, { TodoProvider, useTodoContext } from './context/TodoContext'
import TodoItem from './components/TodoItems'
import { useEffect } from 'react'


function App() {


  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const obj = {
      todo: todo,
      id: Date.now(),
      completed: false
    }

    setTodos((todos) => [...todos, obj]);
  }
  const updateTodo = (todo, id) => {
    const newTodos = todos.map((element) => (element.id === id ? { ...element, todo: todo } : element));
    console.log(newTodos);
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
      setTodos((todos)=>todos.filter((el)=>(el.id!==id?el:null)))
  }

  useEffect(()=>{
        const todos=JSON.parse(localStorage.getItem("key1"));
        
        if (todos && todos.length > 0) {
          setTodos(todos)
        }
  },[])

   useEffect(()=>{
        localStorage.setItem("key1",JSON.stringify(todos));
  },[todos])

  const toggleComplete = (id) => {
    setTodos((todos) => todos.map((prev) => (prev.id === id ? { ...prev, completed: !prev.completed } : prev)))
  }



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">

            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
