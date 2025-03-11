
import '@/styles/components/Modal.scss';


export interface ModalProps {
  success: boolean;
  closeModal: Function;
  newUser: object;
}

const Modal = ({success,closeModal,newUser}: ModalProps) => {


function ModalClick() {  
  closeModal();
}


  return (

    <div className={`modal-success-container ${success ? 'show' : null}`}>
      <div className="modal-content flex align-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={(e) => ModalClick(e)}>
            <p id="modal-title" className="title text-black-700 font-bold text-xl text-center">Add User <span className="text-green-600 mx-2"> {newUser.lastName} {newUser.firstName}</span></p>
      </div>
    </div>

  )
}
export default Modal