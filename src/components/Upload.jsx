import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useState } from "react";

export const Upload = () => {
  const [file, setFile] = useState(null);
  console.log(file);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <div className="upload">
      <label className="input__label" onChange={handleChange}>
        <input className="upload__input" type="file" />
        Select file
        <FileUploadIcon
          sx={{ width: "20px", height: "20px", color: "rgb(255, 132, 173)" }}
        />
      </label>

      <div className="file__container">
        {file && <div>{file.name}</div>}
    </div>
    </div>
  );
};
