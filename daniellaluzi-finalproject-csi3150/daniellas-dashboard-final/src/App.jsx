import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Weather from './components/Weather.jsx';
import News from './components/News.jsx';
import Clock from './components/Clock.jsx';
import ToggleMode from './components/ToggleMode.jsx';
import ToDoList from './components/ToDoList.jsx';

function App() {

  return(
    <>
      <div className="container">
        <Header/>
        <div className="clockAndToggle">
            <ToggleMode/>
            <Clock/>
        </div>
        <hr/>
        <ToDoList/>
        <hr/>
        <Weather/>
        <hr/>
        <News/>
      </div>
    </>
  );

}

export default App
