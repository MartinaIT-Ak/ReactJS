import React, { useState } from 'react';
import TodoItem from './ToDoItem';
import Modal from  'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '25%',
      right: 'auto',
      bottom: 'auto',
      background: '#F5F7F8',
      padding: '10px',
      border: '2px solid #000',
      position: 'relative',
      width: '50vw'
    },
  };

function TodoList() {
    //Array des taches
    const [tasks, setTasks] = useState([
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
    ]);
    
    //Gestion de text d'input
    const [text, setText] = useState('');
    const [newText, setNewText] = useState('');
    
    //Fonction d'ajout d'une tache
    function addTask(text) {
        //Creer un objet de la tache nouvelle
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        //Ajouter aux mes taches
        setTasks([...tasks, newTask]);
        //Vider l'input
        setText('');
    }

    //Fonction de suppression d'une tache
    function deleteTask() {
        //Enlever la tache de ma liste
        setTasks(tasks.filter(task => task.id !== taskModal));
        //Appeler la fonction de fermeture du modal
        closeModal();
    }

    //Fonction de modification du texte d'une tâche
    function editTask() {
        //Modifier le texte de la tâche
        setTasks(tasks.map(task => {
            if(task.id == taskModal) {
                return {
                    ...task,
                    text: newText
                };
            } else {
                return task;
            }
        }))
        //Appeler la fonction de fermeture du modal
        closeModal();
    }

    //Gestion click sur le checkbox d'une tache
    function toggleCompleted(id) {
        //Changer la propriete 'completed' de tache en question
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            } 
        }));
    }

    //Surveillance de tache a supprimer ou editer pour permettre l'utilisation de modal
    const [taskModal, setTaskModal] = useState(0);
    //Gestion de surbrillance de modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const [typModal, setTypModal] = useState('');
    //Recup dynamique de titre et text du modal en fonction de type de modal appele
    const [titreModal, setTitreModal] = useState('');
    const [textModal, setTextModal] = useState('');

    //Fonction d'affichage du modal
    function openModal(taskId, typModal) {
        setTypModal(typModal);
        //Afficher le modal demande
        if(typModal == 'delete') {
            setTitreModal('Supprimer tâche ?');
            setTextModal('Etes-vous sûr(e) de vouloir supprimer cette tâche ?');
        }
        if(typModal == 'edit') {
            setTitreModal('Modifier cette tâche ?');
            setTextModal('Veuillez saisir vos modifications ci-dessous :');
            setNewText(tasks.filter(task => task.id == taskId)[0].text);
        }
        setIsOpen(true);
        //Sauvegarder la tache qui a ouvert ce modal
        setTaskModal(taskId);
    }

    //Fonction de fermeture du modal
    function closeModal() {
        //Cacher le modal
        setIsOpen(false);
        //Ne plus sauvegarder la tache a supprimer
        setTaskModal(0);
        setNewText('');
    }

    return (
        <div className="todo-list">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal Delete"
                style={customStyles}
            >
                <h2 class='modalTitre'>{titreModal}</h2>
                <div>{textModal}</div>
                {typModal == 'edit' && 
                <input
                    className='inputEdit'
                    value={newText}
                    onChange={e => setNewText(e.target.value)}/> 
                    }
                <div class='modalButtons'>
                    <button onClick={() => closeModal()}>Annuler</button>
                    <button onClick={typModal == 'delete' ? () => deleteTask() : () => editTask()}>{typModal == 'delete' ? 'Oui, supprimer' : 'Modifier'}</button>
                </div>
            </Modal>
            {tasks.map(task => (
                <TodoItem
                key={task.id} 
                task={task}
                openModal={openModal}
                toggleCompleted={toggleCompleted}
                />
            ))}
            <input
                className="ajouter"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Tapez ici" 
                />
            <button className="ajouter" onClick={() => addTask(text)}>Ajouter</button>
        </div>
    );
}

export default TodoList;