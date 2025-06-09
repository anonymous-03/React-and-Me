import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState={
    todos:[{
        id:1,
        text:"Hello Guyss"
    }]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            };
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos=state.todos.filter((todo)=>action.payload!==todo.id)
        },
        showTodo:(state,action)=>{
            state.todos=[...action.payload];
            console.log(state.todos);
        }

    }
})

export const {addTodo,removeTodo,showTodo}=todoSlice.actions;

export const todoReducers=todoSlice.reducer;
