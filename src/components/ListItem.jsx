function ListItem(props)
{
    return(
        <li className='item'>
            <div className="item_container">
                <div className='item_text'>
                    <label>{props.task}</label>
                </div>
                <div className="right">
                    <div className='open_date'>
                        <label>{props.date}</label>
                    </div>
                    <div className='check_box'>
                        <input id={props.id} type='checkbox' className="hidden_check_mark" checked={props.checked}/>
                        <span className="check_mark"></span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ListItem;