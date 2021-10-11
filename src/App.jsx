import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import Crud from './components/Crud';
import Users from './components/Users';
import User from './components/User';
import Signup from './components/Signup';
import Login from './components/Login';
import Garage from './components/Garage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [userOk, setUserOk] = useState(null);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUserOk(user.email);
      }
    });
  }, []);

  const logout = () => {
    const auth = getAuth();
    auth.signOut();
    setUserOk(null);
  };

  return (
    <Router>
      <nav className='container mx-auto flex justify-center py-4'>
        <Link to='/' className='btn-navbar'>
          Home
        </Link>
        <Link to='/users' className='btn-navbar'>
          Users
        </Link>
        {userOk ? (
          <>
            <Link to='/crud' className='btn-navbar'>
              Crud
            </Link>
            <Link to='/Garage' className='btn-navbar'>
              Garage
            </Link>
            <button
              onClick={logout}
              className='bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-yellow-50 font-medium'
            >
              Logout
            </button>
          </>
        ) : (
          <Link to='/login' className='btn-navbar'>
            Login
          </Link>
        )}
      </nav>

      <main className='container mx-auto mt-8 p-4 rounded shadow-lg'>
        <Switch>
          <Route exact path='/' component={Counter} />
          <Route path='/users' component={Users} />
          <Route path='/crud' component={Crud} />
          <Route path='/Garage' component={Garage} />
          <Route path='/user/:id' component={User} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
