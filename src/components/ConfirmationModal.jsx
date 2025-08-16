import React, { useEffect, useRef } from "react";
import { FocusTrap } from "focus-trap-react";

function ConfirmationModal(props)
{
    const button1Ref = useRef(null);

    useEffect(() => {
        if (props.isOpen && button1Ref.current){
            button1Ref.current.focus();
        }
    }, [props.isOpen]);

    if (!props.isOpen) {
        return null;
    }

    return (
        <>
            <FocusTrap active={props.isOpen}>
                <div className="modal_overlay">
                    <dialog open className="confirmation_modal_wrapper">
                        <p>{props.modalText}</p>
                        <button className="modal_button_one" onClick={props.onButton1Click} ref={button1Ref}>{props.button1Text}</button>
                        <button className="modal_button_two" onClick={props.onButton2Click}>{props.button2Text}</button>
                    </dialog>
                </div>
            </FocusTrap>
        </>
    )
}

export default ConfirmationModal;