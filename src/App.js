import React from 'react';
import './App.css';
import WeatherCard from './components/card.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherCard />
      </header>
    </div>
  );
}

export default App;
