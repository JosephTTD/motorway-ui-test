import React, { useEffect, useRef } from "react";
import { useModal } from "../ModalContext";

const Modal = () => {
  const { isModalOpen, closeModal, modalContent } = useModal();
  const modalRef = useRef();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflowY = "auto";
    };
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className={`modal`} ref={modalRef}>
        <button className="modal-close" onClick={closeModal}>
          <span>&times;</span>
        </button>
        <div className="modal-content">{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
