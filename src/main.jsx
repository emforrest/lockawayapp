import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "item_0", task: "Task 1", date: "15/9/24 12:00", checked: true },
  { id: "item_1", task: "Task 2", date: "16/9/24 4:00", checked: false },
  { id: "item_2", task: "Task 3", date: "17/9/24 12:00", checked: false },
  { id: "item_3", task: "Task 4", date: "18/9/24 12:20", checked: false },
  { id: "item_4", task: "Task 5", date: "19/9/24 12:00", checked: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
)
