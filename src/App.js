import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Crud from "./components/Crud";

const App = () => {
  return (
    <Router>
      <nav className="container mx-auto flex justify-center py-4">
        <Link className="btn-navbar" to="/">
          Home
        </Link>
        <Link className="btn-navbar" to="/crud">
          Crud
        </Link>
      </nav>

      <main className="container mx-auto mt-8 p-4 rounded shadow-lg">
        <Switch>
          <Route exact path="/">
            <Counter />
          </Route>
          <Route path="/crud">
            <Crud />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
