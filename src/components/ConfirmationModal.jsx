function ConfirmationModal(props)
{
    return (
        <>
            <div className="confirmation_modal_wrapper">
                <p>{props.modalText}</p>
                <button onClick={props.onButton1Click}>{props.button1Text}</button>
                <button onClick={props.onButton2Click}>{props.button2Text}</button>
            </div>
        </>
    )
}



export default ConfirmationModal;