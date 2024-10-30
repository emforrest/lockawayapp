import React, {useState} from 'react';

function ListItem(props)
{
    const [checked, setChecked] = useState(props.checked);

    const handleCheck = (event) => {
        console.log(checked);
        setChecked(!checked);
        props.toggleTaskCompleted(props.id);
    }

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
                <label className="check_box"> 
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