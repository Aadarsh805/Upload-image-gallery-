import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export const Upload = () => {
  const [file, setFile] = useState(null);
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
        {error && <div className="error">{error}</div>}
        {file && (
          <div>
            {file.name}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>
        )}
      </div>
    </div>
  );
};
