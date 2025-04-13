import { useEffect } from "react";

function ConfirmationModal(props)
{

    return (
        <>
            <div className="modal_overlay">
                <dialog open className="confirmation_modal_wrapper">
                    <p>{props.modalText}</p>
                    <button className="modal_button_one" onClick={props.onButton1Click}>{props.button1Text}</button>
                    <button className="modal_button_two" onClick={props.onButton2Click}>{props.button2Text}</button>
                </dialog>
            </div>
        </>
    )
}



export default ConfirmationModal;