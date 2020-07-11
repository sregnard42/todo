import React, { useState } from 'react';

export default function TodoInput({ submitTodo }) {
    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (value === '')
            return;
        submitTodo(value);
        setValue('');
    }

    return (
        <div className="TodoInput" >
            <form
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    placeholder="Add a todo..."
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </form>
        </div>
    );
}