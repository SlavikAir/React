import MyButton from "../UI/button";
import "./modal.css"

const Modal = (props) => {
    return (
        <div className={`modal-wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}>
            <div className="modal-dialog modal-width">
                <div className="modal-content">
                    <div className='modal-body '>
                    <MyButton styleName='close-button' onClick={props.ModalClose} name="X"/>
                        {props.header}
                        {props.body}
                        {props.footer}
                    </div>
                </div>
             </div>
        </div>
    )
}


export default Modal;