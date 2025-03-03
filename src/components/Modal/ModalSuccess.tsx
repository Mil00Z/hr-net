import {useState} from 'react'

import '@/styles/components/Modal.scss';


const ModalSuccess = (props) => {

const {success,closeModal} = props;


function ModalClick(e) {  

  closeModal();

}


  return (
    // <div className="modal-success-container" onClick={(e) => ModalClick(e)}>

    //   <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    //       <div className="flex items-center justify-center w-xl h-xl pt-4 px-4 pb-20 text-center sm:p-0 dark:bg-gray-700">
    //           <p id="modal-title" className="text-white text-3xl font-bold">Update of Tables is OK</p>
    //         </div>
    //     </div>
    //   </div>

    <div className={`modal-success-container ${success ? 'show' : null}`}>
      <div className="modal-content flex align-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={(e) => ModalClick(e)}>
            <p id="modal-title" className="title text-black-700 font-bold text-xl text-center">Update of Tables is OK</p>
      </div>
    </div>

  )
}
export default ModalSuccess