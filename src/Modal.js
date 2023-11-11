import React from 'react';

import './Modal.css'

/**
 * Composant Modal pour afficher du contenu modal.
 * @component
 * @param {Object} props - Propriétés du composant.
 * @param {string} props.text - Texte à afficher dans le modal.
 */
function Modal({ text }) {
  /**
   * Fonction pour fermer le modal.
   * @function
   */
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