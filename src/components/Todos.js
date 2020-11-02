import React, { useState } from 'react';

/* To Do List
    1. Add To Do
    2. Display To Do's
    3. Cross Off To Do
    4. Show number of active To Do's
    5. Filter all/active/complete
    6. Delete Single To Do
    7. Delete All To Do's complete
        7.1 Only show if atleast one is complete
    8. Button to toggle all on/off
*/

function TodosForm(props) {

    const [ input, setInput ] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // });

        setInput('')
    };

    return (
        <div className='container' onSubmit={handleSubmit}>
            <h2>To Do</h2>
            <input 
                type='text'
                placeholder='Add a To Do...'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
            />
            <button>Add to To Do List</button>
        </div>
    )
}

export default TodosForm;