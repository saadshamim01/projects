import React from "react";
import Search from "./Components/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Counter from "./Components/Counter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/api/search/">
            <Search />
          </Route>
          <Route path="/api/counter/">
            <Counter />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
