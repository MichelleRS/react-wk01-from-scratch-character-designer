import './App.css';
import React from 'react';

import Form from './components/Form';
import Stats from './components/Stats';
import Character from './components/Character';

function App() {
  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section className="container">
        <div className="left">
          <Form />
          <Stats />
        </div>
        <div className="right">
          <Character />
        </div>
      </section>
    </main>
  );
}

export default App;
