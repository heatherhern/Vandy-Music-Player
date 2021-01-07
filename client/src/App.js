import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
<<<<<<< HEAD
=======
// import Search from "./components/Search";
// import SearchResults from "./components/SearchResults";
>>>>>>> main
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
<<<<<<< HEAD
=======
          {/* <Route exact path="/search">
            <Search />
            <SearchResults />
          </Route> */}
>>>>>>> main
        </Switch>
      </div>
    </Router>
  );
}

export default App;