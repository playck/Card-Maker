import React from "react";
import Login from "./Components/login/login";
import Maker from "./Components/maker/maker";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
