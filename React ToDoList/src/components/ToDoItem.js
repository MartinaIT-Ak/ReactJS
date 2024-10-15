import React, { useState } from 'react';

function TodoItem({ task, openModal, toggleCompleted }) {
    //Gestion click sur le case a cocher
    function handleChange() {
        toggleCompleted(task.id);
    }
    
    return (
        <div>
            <div className={task.completed ? "todo-item completed" : "todo-item incomplete"}>
                <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                    className="action checkbox" 
                />
                <p>{task.text}</p> 
                <div>
                    <button
                        className="action modification"
                        onClick={() => openModal(task.id, 'edit')}>
                            <span className="material-icons">edit</span>
                    </button>
                    <button
                        className="action suppression" 
                        onClick={() => openModal(task.id, 'delete')}>
                            <span className="material-icons">delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;