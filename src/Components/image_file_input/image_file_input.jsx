import React, { useRef } from "react";
import styels from "./image_file_input.module.css";

const ImageFileInput = ({ ImageUpload, name, imageUpload, onFileChange }) => {
  const inputRef = useRef();
  const onImageUpload = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onImageChange = async (e) => {
    const uploaded = await imageUpload.upload(e.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styels.container}>
      <input
        ref={inputRef}
        className={styels.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onImageChange}
      />
      <button className={styels.button} onClick={onImageUpload}>
        {name || "no File"}
      </button>
    </div>
  );
};

export default ImageFileInput;
