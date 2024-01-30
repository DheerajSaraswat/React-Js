import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text: 'Somethinf...'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter( (todo)=>todo.id!==action.payload.id )
        },
        editTodo: (state, action)=>{
            todo = state.todos.forEach( (todo)=> todo.id===action.payload.id ? todo.text = action.payload:  todo.text = action.payload.text )
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer