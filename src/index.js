import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/auth_service";
import ImageUpload from "./service/image_upload";
import ImageFileInput from "./Components/image_file_input/image_file_input";

const authService = new AuthService();
const imageUpload = new ImageUpload();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUpload={imageUpload} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
