import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, completeTodo, deleteTodo} ) {
    return (
        <div className='TodoList'>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    onComplete={completeTodo}
                    onDelete={deleteTodo}
                />
            ))}
        </div>
    );
}