import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import NotFoundPage from './components/NotFoundPage';
import { Redirect } from 'react-router';


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path={["/", "/createaccount"]}>
            <CreateAccount />
          </Route>

          <Route exact path="/dashboard">
            <Nav />
            <Dashboard />
            <Footer />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />

        </Switch>
      </div>
    </Router>
  );
}

export default App;