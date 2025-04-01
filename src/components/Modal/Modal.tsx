import { Employee } from '@/types/employees.types';

import '@/styles/components/Modal.scss';


export interface ModalProps {
  success: boolean;
  closeModal: () => void;
  newUser: Employee;
}


const Modal = ({success,closeModal,newUser}: ModalProps) => {

function ModalClick() {  
  closeModal();
}


return (

    <div className={`modal-success-container ${success ? 'show' : null}`}>
      <div className="modal-content flex align-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <p id="modal-title" className="title text-black-700 font-bold text-xl text-center">Added User : <span className="text-green-600 mx-2"> {newUser.lastName} {newUser.firstName}</span></p>
          <span className="closer" onClick={() => ModalClick()}>❌</span>
      </div>
    </div>
  )
}
export default Modal