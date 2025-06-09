import { useEffect } from "react"
import Todoform from "./components/Todoform"
import Todolist from "./components/Todolist"
import { useDispatch, useSelector } from "react-redux"
import { showTodo } from "./features/todo/todoSlice";



function App() {
  
  const todos=useSelector((state)=>state.todos);
  const dispatch=useDispatch();
   useEffect(()=>{
        const newtodos=JSON.parse(localStorage.getItem("todos"));
        if(newtodos&&newtodos.length>0)
        dispatch(showTodo(newtodos));
  },[dispatch])

  
  useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

 
  return (
    <div className=" w-full h-screen bg-gray-300 flex flex-wrap flex-col items-center">
      <Todoform/>
      <Todolist/>
    </div>
  )
}

export default App
