import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  return (
    <div className="App">
      <div>
        <button><FontAwesomeIcon icon={['fas', 'caret-up']} style={{width: '100px', height: '100px'}} /></button>
        <button><FontAwesomeIcon icon={['fas', 'caret-up']} style={{width: '100px', height: '100px'}} /></button>
        <button><FontAwesomeIcon icon={['fas', 'caret-up']} style={{width: '100px', height: '100px'}} /></button>
      </div>
      <div className="numbers">
        <h1 style={{fontSize: '55px'}}>00 : 00 : 00</h1>
      </div>
      <div>
        <button><FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}} /></button>
        <button><FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}} /></button>
        <button><FontAwesomeIcon icon={['fas', 'caret-down']} style={{width: '100px', height: '100px'}} /></button>
      </div>
      <button><h1>Start</h1></button>
    </div>
  );
}

export default App;
