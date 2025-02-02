import React, {useEffect, useState, useRef} from 'react';

function ListItem(props)
{
    const [checked, setChecked] = useState(props.checked);
    const [isEditing, setIsEditing] = useState(false);
    const hasMounted = useRef(false);

    const handleCheck = (event) => {
        setChecked(checked => !checked);
    }

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
                >
                </input>
                <span className="check_mark"></span>
            </label>

        </div>
    )

    const editTemplate = (
        <div className="item">
            <div className='item_text'>
                <input type="text" defaultValue={props.task}/>
            </div>

            <div className='open_date'>
                <input type="datetime-local" defaultValue={props.date}/>
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
                onClick={() => setIsEditing(false)}
            >
                <span>Close</span>
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

    return(
        <div className="item_container">
            {isEditing ? editTemplate : viewTemplate}
        </div>
       
    );
}

export default ListItem;