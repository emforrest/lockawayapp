//Imports
import React from 'react';
import './index.css';
import ListItem from './components/ListItem';

function App(props) {

    const taskList = props.tasks?.map((item) => 
      <ListItem id={item.id} task={item.task} date={item.date} checked={item.checked}/>);

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
            {taskList}
        </ul>
        
      </div>
      </>
    );
  }
  
  export default App;
  
//keep following from Tasks as data, add header bar later
//https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning