//Imports
import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import './index.css';
import ListItem from './components/ListItem';
import Form from './components/Form';
import FilterButton from './components/FilterButton';


function App(props) {

    const [tasks, setTasks] = useState(props.tasks);

    const taskList = tasks?.map((item) => 
      <ListItem 
        id={item.id} 
        task={item.task} 
        date={item.date} 
        checked={item.checked}
        key={item.id}
        toggleTaskCompleted={toggleTaskCompleted}
      />);

      function addTask(name, date) 
      {
        date = date ? format(date, 'dd/MM/yyyy HH:mm') : '';
        const newTask = {id: `item_${nanoid()}`, task: name, date: date, checked: false};
        setTasks([...tasks, newTask]);
      }

      function toggleTaskCompleted(id) 
      {
        console.log('hi');
      }

    return (
      <>
        <div className="header_bar"></div>

        <div className="buttons">
          {/* <button>Open Vault</button>
          <button>Show Completed</button> */}
          <FilterButton />
          <FilterButton />
        </div>

        <h1>Active Tasks</h1>
        <Form addTask={addTask}/>

        <div className="current_list">
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