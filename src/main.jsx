import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "item_0", task: "fix date comparison", date: "15/09/2024 12:00", checked: false },
  { id: "item_1", task: "what if tasks is empty", date: "16/09/2024 04:00", checked: false },
  { id: "item_2", task: "hide completed doesn't work, uses predefined check value not current", date: "17/09/2024 12:00", checked: false },
  { id: "item_3", task: "text wrap", date: "18/09/2024 12:20", checked: true },
  { id: "item_4", task: "edit/delete", date: "19/09/2024 12:00", checked: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
)
