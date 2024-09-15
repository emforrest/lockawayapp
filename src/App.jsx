//Imports
import React from 'react';
import './index.css';
import ListItem from './components/ListItem';

function App(props) {

    return (
      <>
      <div className="header_bar"></div>

      <div className="buttons">
        <button>Open Vault</button>
        <button>New Task</button>
      </div>

      <div className="current_list">
        <h1>Active Tasks</h1>
        <ul>
            <ListItem task="Task 1" date="15/9/24 12:00"/>
            <ListItem task="Task 2" date="16/9/24 4:00"/>
            <ListItem task="Task 3" date="17/9/24 12:00"/>
            <ListItem task="Task 4" date="18/9/24 12:20"/>
            <ListItem task="Task 5" date="19/9/24 12:00"/>
        </ul>
        
      </div>
      </>
    );
  }
  
  export default App;
  
//w3schools - how to create header bar, check list, styling. Then add more functionality
//https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning