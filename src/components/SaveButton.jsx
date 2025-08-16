import { useState } from 'react';
import saveImage from '../assets/save.png';
import ConfirmationModal from './ConfirmationModal';

function SaveButton(props) {
    const [showSaved, setShowSaved] = useState(false);
    const closeModal = () => setShowSaved(false);

    return (
        <>
            <button className='save_button' type='button' onClick={function () {
                props.saveTasks();
                setShowSaved(true);
            }}>
                <img src={saveImage} alt="Save Tasks" />
            </button>
            
            <ConfirmationModal 
                isOpen={showSaved}
                modalText={`Tasks saved.`} 
                button1Text={"Back"}
                onButton1Click={closeModal}
                button2Text={"Ok"} 
                onButton2Click={closeModal}
            />
        </>
    )
}

export default SaveButton;