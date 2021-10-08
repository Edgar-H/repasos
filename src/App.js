import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Crud from "./components/Crud";
import Users from "./components/Users";
import User from "./components/User";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <nav className="container mx-auto flex justify-center py-4">
        <Link to="/" className="btn-navbar">
          Home
        </Link>
        <Link to="/crud" className="btn-navbar">
          Crud
        </Link>
        <Link to="/users" className="btn-navbar">
          Users
        </Link>
        <Link to="/signup" className="btn-navbar">
          Sign up
        </Link>
        <Link to="/login" className="btn-navbar">
          Login
        </Link>
      </nav>

      <main className="container mx-auto mt-8 p-4 rounded shadow-lg">
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/crud" component={Crud} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
