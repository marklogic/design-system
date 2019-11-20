import React from 'react';
import MlButton from './components/ml-button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MlButton disabled={true} >Help</MlButton>
      </header>
    </div>
  );
}

export default App;
