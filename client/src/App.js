import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/createaccount"]}>
            <CreateAccount />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;