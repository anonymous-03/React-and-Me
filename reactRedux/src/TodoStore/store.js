import {configureStore} from '@reduxjs/toolkit'
import {todoReducers} from '../features/todo/todoSlice.js'
export const store=configureStore({
    reducer:todoReducers
})