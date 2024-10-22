import React from 'react';

interface ModalProps {
  closeModal: () => void;  // Function to close the modal
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-[24px]">
      <div className="bg-white rounded-lg shadow-lg p-6 lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Thank You</h2>
        <p className="mb-4">Thank you for reaching out to us. We will get back to you within 24 hours.</p>

        <button
          onClick={closeModal}
          className="bg-[#074229] text-white px-4 py-2 rounded hover:bg-black"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
