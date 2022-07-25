import React from "react";
import useFirestore from "../useFirestore";

export const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="image__grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="image__container"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="image" />
          </div>
        ))}
    </div>
  );
};
