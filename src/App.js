import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.name? <h1> Hola {props.name}</h1> : <h1>Hola invitado</h1> }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <label for="username-input">Username</label>
      <input id="username-input" />
      <button>
        Aplicar
      </button>
    </div>
  );
}

export default App;
