import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import TodoItem from './ToDoItem';

const customStyles = StyleSheet.create({
    content: {
      top: '50%',
      left: '25%',
      right: 'auto',
      bottom: 'auto',
      background: '#F5F7F8',
      padding: '10',
      border: '2px solid #000',
      position: 'relative',
      width: '50vw'
    },
  });

function TodoList() {
    //Array des taches
    const tasks = [
        {
            id: 1,
            text: "Faire les courses",
            completed: true
        },
        {
            id: 2,
            text: "Aller à la salle de sport 3 fois par semaine",
            completed: false
        },
        {
            id: 3,
            text: "Monter à plus de 5000m d altitude",
            completed: false
        },
        {
            id: 4,
            text: "Acheter mon premier appartement",
            completed: false
        },
        {
            id: 5,
            text: "Perdre 5 kgs",
            completed: false
        },
        {
            id: 6,
            text: "Gagner en productivité",
            completed: false
        },
        {
            id: 7,
            text: "Apprendre un nouveau langage",
            completed: false
        },
        {
            id: 8,
            text: "Faire une mission en freelance",
            completed: false
        },
        {
            id: 9,
            text: "Organiser un meetup autour de la tech",
            completed: false
        },
        {
            id: 10,
            text: "Faire un triathlon",
            completed: false
        }
    ];

    const text = '';

    //Fonction d'ajout d'une tache
    function addTask(text) {
        //Creer un objet de la tache nouvelle
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        //Ajouter aux mes taches
        tasks.push(newTask);
        //Vider l'input
        setText('');
    }

    //Gestion click sur le checkbox d'une tache
    /* function toggleCompleted(id) {
        //Changer la propriete 'completed' de tache en question
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            } 
        }));
    } */

    return (
        <View className="todo-list">
            {tasks.map(task => (
                <TodoItem
                key={task.id} 
                task={task}
                />
            ))}
            <TextInput
                className="ajouter"
                value={text}
                onChangeText={e => setText(e.target.value)}
                placeholder="Tapez ici" 
                keyboardType='default'
                />
            <Button className="ajouter" onPress={() => addTask(text)}>Ajouter</Button>
        </View>
    );
}

export default TodoList;