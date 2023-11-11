import React from 'react';

import './Modal.css'

function Modal({ text }) {
  const closeModal = () => {
    let containerModal = document.getElementById('containerModal');
    containerModal.style.display = 'none';
  }

  return (
    <div id='containerModal'>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeModal()}>&times;</span>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;