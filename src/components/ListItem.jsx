import React, {useEffect, useState, useRef} from 'react';

function ListItem(props)
{
    const [checked, setChecked] = useState(props.checked);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(props.task);
    const [newDate, setNewDate] = useState(props.convertToISODateTime(props.date));
    const hasMounted = useRef(false);
    const taskNameRef = useRef(false);

    const handleCheck = (event) => {
        setChecked(checked => !checked);
    }

    const handleChangeName = (e) => setNewName(e.target.value);
    const handleChangeDate = (e) => setNewDate(e.target.value);

    const viewTemplate = (
        <div className="item">
            <div className='item_text'>
                <span>{props.task}</span>
            </div>

            <div className='open_date'>
                <span>{props.date}</span>
            </div>

            <div 
                className='blueText' 
                role='button' 
                tabIndex={0} 
                onClick={() => setIsEditing(true)}
            >
                <span>Edit</span>
            </div>
            
            {/* wrap the hidden and custom checkbox in a label so that the custom checkbox can be clicked */}

            <label className="check_box_label">
                <input 
                    type='checkbox'
                    id={props.id}
                    checked={checked}
                    onChange={handleCheck}
                    className='styled_input'
                >
                </input>
                <span className="check_mark"></span>
            </label>

        </div>
    )

    const editTemplate = (
        <div className="item">
            <div className='item_text'>
                <input 
                    className='edit_text_input'
                    type='text' 
                    ref={taskNameRef}
                    value={newName}
                    onChange={handleChangeName}
                ></input>

                <input
                    type="datetime-local"
                    value={newDate}
                    onChange={handleChangeDate}
                    >
                </input>
            </div>

            <div 
                className='redText' 
                role='button' 
                tabIndex={0}
            >
                <span>Delete</span>
            </div>

            <div 
                className='blueText' 
                role='button' 
                tabIndex={0} 
                onClick={() => {
                    props.editTask(props.id, newName, newDate);
                    setIsEditing(false);
                }}
            >
                <span>Save</span>
            </div>
        </div>
    )

    useEffect(() => {
        if (hasMounted.current) {
            props.toggleTaskCompleted(props.id, checked);
        } else {
            hasMounted.current = true;
        }
    }, [checked]);

    useEffect(() => {
        if (isEditing && taskNameRef.current) {
            taskNameRef.current.focus();
        }
    }, [isEditing]);

    return(
        <div className="item_container">
            {isEditing ? editTemplate : viewTemplate}
        </div>
       
    );
}

export default ListItem;