import React, { useState } from 'react';

function TodoItem({ task, openModal, toggleCompleted }) {
    const styles = StyleSheet.create({
        action: {
            margin: '10px',
           },
        action_checkbox: {
            width: '20px',
        },
        action_suppression: {
            width: '40px',
            color: 'red',
            fontSize: '25px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
        },
        action_modification: {
            width: '40px',
            color: 'blue',
            fontSize: '25px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
        },
    })
    
    //Gestion click sur le case a cocher
    function handleChange() {
        toggleCompleted(task.id);
    }
    
    return (
        <View>
            <View className={task.completed ? "todo-item completed" : "todo-item incomplete"}>
                <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                    style={[styles.action, styles.action_checkbox]}
                />
                <p>{task.text}</p> 
                <View>
                    <Button
                        style={[styles.action, styles.action_modification]}
                        onPressed={() => openModal(task.id, 'edit')}>
                            <span className="material-icons">edit</span>
                    </Button>
                    <Button
                        style={[styles.action, styles.action_suppression]}
                        onPressed={() => openModal(task.id, 'delete')}>
                            <span className="material-icons">delete</span>
                    </Button>
                </View>
            </View>
        </View>
    );
}

export default TodoItem;