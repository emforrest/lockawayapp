import React, {useEffect, useState, useRef} from 'react';

function ListItem(props)
{
    const [checked, setChecked] = useState(props.checked);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(props.task);
    const hasMounted = useRef(false);
    const taskNameRef = useRef(false);

    const handleCheck = (event) => {
        setChecked(checked => !checked);
    }

    const handleChangeName = (e) => setNewName(e.target.value);

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
                    className='styled_input'
                    type='text' 
                    ref={taskNameRef}
                    value={newName}
                    onChange={handleChangeName}
                ></input>
            </div>

            <div className='open_date'>
            <span>{props.date}</span>
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
                    props.editTask(props.id, newName, props.date); //edit to have the new date
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