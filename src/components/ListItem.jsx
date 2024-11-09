import React, {useEffect, useState, useRef} from 'react';

function ListItem(props)
{
    const [checked, setChecked] = useState(props.checked);
    const hasMounted = useRef(false);

    const handleCheck = (event) => {
        setChecked(checked => !checked);
    }

    useEffect(() => {
        if (hasMounted.current) {
            props.toggleTaskCompleted(props.id, checked);
        } else {
            hasMounted.current = true;
        }
    }, [checked]);

    return(
        <div className="item_container">
            <div className="item">
                <div className='item_text'>
                    <label>{props.task}</label>
                </div>
    
                <div className='open_date'>
                    <label>{props.date}</label>
                </div>
                
                {/* wrap the hidden and custom checkbox in a label so that the custom checkbox can be clicked */}
                <label className={`check_box ${checked ? "checked" : ""}`}> 
                    <span className="check_mark"></span>
                    <input 
                        type='checkbox'
                        id={props.id}
                        className="hidden_check_mark"
                        checked={checked}
                        onChange={handleCheck}
                    >
                    </input>
                </label>
            </div>
        </div>
       
    );
}

export default ListItem;