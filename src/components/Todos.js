import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './Todos.css'

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

class TodosList extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        if (this._inputElement.value !== ''){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
    
        this._inputElement.value = '';

        console.log(this.state.items);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className='widget-todo container'>
                    <div className='header'>
                        <h2>To Do List</h2>
                        <form onSubmit={this.addItem}>
                            <input 
                                ref={(a) => this._inputElement = a}
                                placeholder='Enter task'
                            />
                            <button type='submit'>Add</button>
                        </form>
                    </div>
                    <TodoItems entries={this.state.items} delete={this.deleteItem}/>
                </div>
            </>
        );
    }
}

export default TodosList;