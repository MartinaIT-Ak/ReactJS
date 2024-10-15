import logo from './logo.svg';
import TodoList from './components/ToDoList';
import './App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="header-text-container">
          <p className="text-header">
            Mon To Do liste
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
