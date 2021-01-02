import logo from './logo.svg';
import './App.css';
import React, { useState } from React;
import { AppContext } from "./libs/contextLib";



function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
