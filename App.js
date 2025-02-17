import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import TodoList from './components/ToDoList';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.App_header]}>
        <Text style={styles.text_header}>Ma To-Do Liste</Text>
      </View>
      <TodoList></TodoList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  App_logo: {
    height: '20',
    pointerEvents: 'none'
  },
  App_header: {
    flex: '1',
    width: '100%',
    height: '60',
    paddingVertical: '20',
    backgroundColor: '#282c34',
    alignItems: 'center',
    color: 'white'
  },
  App_link: {
    marginLeft: '1vh',
    color: '#61dafb',
  },
  header_text_container: {
    marginLeft: 'auto',
    marginRight: '5vh',
    display: 'flex',
    flexDirection: 'column',
  },
  text_header: {
    color: 'white',
    fontWeight: 700
  },
  todo_item: {
    border: '1px solid black',
    borderRadius: '20px',
    margin: '10px auto',
    minWidth: '50%',
    maxWidth: '80%',
    justifyContent: 'space-between'
   },  
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
  todo_item_completed: {
      backgroundColor: '#C0EBA6'
  },
  todo_item_completed_p: {
      color: '#888',
      textDecoration: 'line-through'
  },
  input_ajouter: { 
    height: '26px',
    fontSize: '25px'
  },
  button_ajouter: { 
    height: '30px',
    fontSize: '25'
  },
  modalButtons: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  modalButtons_button: {
    margin: '5px'
  },
  inputEdit: {
    width: '98%'
  }
});
