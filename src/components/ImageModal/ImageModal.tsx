import Modal from "react-modal";
import React, { FC } from "react";
import { Image } from "../../type";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
};
interface ImageModalProps {
  selectedImage: Image | null;
  onClose: () => void;
  modalIsOpen: boolean;
}

const ImageModal: FC<ImageModalProps> = ({
  selectedImage,
  onClose,
  modalIsOpen,
}) => {
  return (
    <Modal
      // className={css.Modal}
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Image Modal'
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={false}
    >
      {selectedImage && (
        <div>
          {/* <button onClick={onClose}>X</button> */}
          <img
            // className={css.imgModal}
            src={selectedImage.cover_photo.urls.regular}
            alt={selectedImage.cover_photo.alt_description}
          />
          <p>{selectedImage.cover_photo.alt_description}</p>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;

{
  /* <div className={css.containerImg}></div> */
}
