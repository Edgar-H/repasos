import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState(),
    [password, setPassword] = useState(),
    [error, setError] = useState(),
    [success, setSuccess] = useState();

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      return setError('Enter email and password');
    }

    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setError('');
        setSuccess(`Welcome ${user.email}`);
        history.push('/');
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/wrong-password':
            setError('Invalid password');
            break;
          case 'auth/user-not-found':
            setError('User not found');
            break;
          default:
            break;
        }
      });
  };

  return (
    <div className='flex'>
      <div className='w-1/2'>
        <p className='text-center font-medium text-2xl mb-6'>Sign in</p>
        <form onSubmit={signIn} className='form-group'>
          {error && <p className='error-message'>{error}</p>}
          {success && <p className='success-message '>{success}</p>}
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='example@example.com'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='password'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='btn'>
            <button type='submit' className='btn-login'>
              Login
            </button>
          </div>
          <p className='option-login'>
            Don’t have an account yet?
            <Link to='/signup' className='text-blue-500'>
              {' '}
              Sign up.
            </Link>
          </p>
        </form>
      </div>
      <div className='w-1/2 flex justify-center'>
        <img
          src='https://source.unsplash.com/user/erondu'
          alt=''
          className='w-10/12'
        />
      </div>
    </div>
  );
};

export default Login;
