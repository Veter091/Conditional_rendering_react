import './Modal.css'

function Modal({title, children}) {

    return (
    <div className="modal">
        <div className="modal__content">
            <div className="modal__title">{title}</div>
            {children}
        </div>
    </div> 
    )
}

export default Modal