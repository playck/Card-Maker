import React from "react";
import Login from "./Components/login/login";
import styles from "./App.module.css";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <div>
        <Login authService={authService} />
      </div>
    </div>
  );
}

export default App;
