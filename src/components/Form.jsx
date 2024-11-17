import { useState } from "react";

function Form(props) 
{
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');

    function handleNameChange(event)
    {
        setTaskName(event.target.value);
    }

    function handleDateChange(event)
    {
        console.log(typeof event.target.value);
        setTaskDate(event.target.value);
    }

    function handleAdd(event)
    {
        event.preventDefault();
        if (taskName !== '')
        {
            props.addTask(taskName, taskDate);
            setTaskName('');
            setTaskDate('');
        }
    }

    return (
        <>
            <div className="form_container">
                <div className="alignment_div">
                    <input 
                        type="text" 
                        className="task_input" 
                        placeholder="Add Task" 
                        autoComplete="off"
                        value={taskName}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="alignment_div">
                    <input
                        type="datetime-local"
                        className="date_input"
                        value={taskDate}
                        onChange={handleDateChange}
                    />
                    <button className="add_button" onClick={handleAdd}>Add</button>
                </div>
            </div>
        </>
    );
}

export default Form;