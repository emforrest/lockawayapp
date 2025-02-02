//Imports
import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import './index.css';
import ListItem from './components/ListItem';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

const COMPLETED_FILTER_MAP = {
  Uncompleted: (item) => !item.checked,
  AnyChecked: () => true,
};

const READY_FILTER_MAP = {
  Ready: (item) => {
    if (item.date === '') {
      return true
    }
    const dateOfTask = new Date(convertToISODateTime(item.date));
    return dateOfTask < new Date();
  },
  AnyDate: () => true,
};

function convertToISODateTime(datetime) {
  const [date, time] = datetime.split(' ');
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}T${time}`;
  ;
}

function App(props) {

    const [tasks, setTasks] = useState(props.tasks);
    const [completeFilter, setCompleteFilter] = useState('Uncompleted');
    const [readyFilter, setReadyFilter] = useState('Ready');

    const taskList = tasks
    .filter(COMPLETED_FILTER_MAP[completeFilter])
    .filter(READY_FILTER_MAP[readyFilter])
    .map((item) => 
      <ListItem 
        id={item.id} 
        task={item.task} 
        date={item.date} 
        checked={item.checked}
        key={item.id}
        toggleTaskCompleted={toggleTaskCompleted}
        editTask={editTask}
      />);

      function addTask(name, date) 
      {
        date = date ? format(date, 'dd/MM/yyyy HH:mm') : '';
        const newTask = {id: `item_${nanoid()}`, task: name, date: date, checked: false};
        setTasks([...tasks, newTask]);
      }

      function toggleTaskCompleted(id, checked) 
      {
        const updatedTasks = tasks.map((task) => {
          if (id === task.id) {
            return { ...task, checked: checked };
          }
          return task;
        });
        setTasks(updatedTasks);
      }

      function editTask(id, newName, newDate) 
      {
        const updatedTasks = tasks.map((task) => {
          if (id === task.id) {
            return { ...task, task: newName, date: newDate };
          }
          return task;
        });
        setTasks(updatedTasks);
      }

    return (
      <>
        <div className="header_bar"></div>

        <div className="buttons">
          <FilterButton text={"Open Vault"} altText={"Close Vault"} setFilter={setReadyFilter}/>
          <FilterButton text={"Show Completed"} altText={"Hide Completed"} setFilter={setCompleteFilter}/>
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
  
//https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning