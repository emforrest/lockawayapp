import saveImage from '../assets/save.png';

function SaveButton(props) {

    return (
        <button className='save_button' type='button' onClick={props.saveTasks}>
            <img src={saveImage} alt="Save Tasks" />
        </button>
    )
}

export default SaveButton;