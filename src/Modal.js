import React from 'react';

import './Modal.css'

function Modal({ isOpen, text }) {

  return (
    <div>
      {isOpen ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => handleCloseModal()}>&times;</span>
            <p>{text}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;