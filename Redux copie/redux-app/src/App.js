import logoReact from './logo.svg';
import logoRedux from './redux.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoReact} className="App-logo" alt="logo" />
        <p>
          Redux App
        </p>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/introduction/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Redux Tools
        </a>
      </header>
      <div>
        <img src={logoRedux} className="Redux-logo" alt="logo" />
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
