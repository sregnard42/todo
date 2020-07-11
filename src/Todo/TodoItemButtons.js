import React from 'react';

function TodoItemButton({ link, text, onClick, index }) {
    return (
        <input
            type='image'
            src={link}
            title={text}
            alt={text}
            onClick={() => onClick(index)}
        />
    );
}

export default function TodoItemButtons({ index, onComplete, onDelete }) {
    return (
        <div
            className='TodoItemButtons'
        >
            <TodoItemButton
                index={index}
                link='complete.png'
                text='Complete'
                onClick={onComplete}
            />
            <TodoItemButton
                index={index}
                link='delete.png'
                text='Delete'
                onClick={onDelete}
            />
        </div>
    );
}