import React from 'react';
import TodoItemButtons from './TodoItemButtons'

export default function TodoItem({ index, todo, onComplete, onDelete }) {
    let className = 'TodoItem';
    className += todo.completed ? ' Completed' : '';
    return (
        <div
            className={className}
            key={index}
        >
            <div className='TodoItemText'>
                {todo.text}
            </div>
            <TodoItemButtons
                index={index}
                onComplete={onComplete}
                onDelete={onDelete}
            />
        </div>
    );
}
