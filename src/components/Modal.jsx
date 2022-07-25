import React from "react";

export const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <div
      className="backdrop"
      onClick={(e) => {
        if (e.target.classList.contains("backdrop")) {
          setSelectedImg(null);
        }
      }}
    >
      <img src={selectedImg} alt="" />
    </div>
  );
};
