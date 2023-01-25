import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><h1>School dashboard</h1></p>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
            <br></br>
            <label htmlFor='email'> Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor='password'>Password: </label>
        <input type="password" id="password" name="password" />
        <button> OK</button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}

export default App;
