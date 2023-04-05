import React from "react";
import { useModal } from "../ModalContext";
import { Picture } from "../components";

const Listing = ({ img }) => {
  const { openModal } = useModal();

  const openImageModal = (img) => {
    openModal(
      <Picture
        imgUrl={img.url}
        imgDesc=""
        classes="image"
        style={{ maxWidth: "100%", maxHeight: "100vh" }}
      />
    );
  };

  return (
    <div className="grid-item" onClick={() => openImageModal(img)}>
      <div className="profile-wrapper bottom">
        <Picture
          imgUrl={img.user.profile_image}
          imgDesc={`${img.user.name}'s profile picture` ?? img.description}
          classes="small"
        />
        <p>{img.user.name}</p>
      </div>
      <Picture imgUrl={img.url} imgDesc={img.alt_description} smoothTransition={true} classes="image" />
    </div>
  );
};

export default Listing;
