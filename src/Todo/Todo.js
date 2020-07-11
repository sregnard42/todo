import React, { useState, useEffect } from 'react';
import Input from './TodoInput.js'
import List from './TodoList.js'
import './Todo.css'

export default function Todo() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = [...todos, { text: todo, completed: false }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    useEffect(() => {
        console.log(todos);
    })

    return (
        <div className="Todo">
            <Input
                submitTodo={addTodo}
            />
            <List
                todos={todos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}