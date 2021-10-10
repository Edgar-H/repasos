import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [passwordConfirm, setPasswordConfirm] = useState(''),
    [error, setError] = useState(null),
    [success, setSuccess] = useState('');

  const history = useHistory();

  const registered = (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      return setError('The password must be at least 8 characters');
    }
    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setError('');
        setSuccess(user.email);
        history.push('/');
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
            setError('Invalid email address');
            break;
          case 'auth/email-already-in-use':
            setError('Email already registered');
            break;
          default:
            break;
        }
      });
  };

  return (
    <div className='flex'>
      <div className='w-1/2'>
        <p className='text-center font-medium text-2xl mb-6'>Sign Up</p>
        <form onSubmit={registered} className='form-group '>
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
              required
            />
          </div>
          <div className='password'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Min 8 characters'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='passwordConfirm'>
            <label htmlFor='passwordConfirm'>Password Confirm</label>
            <input
              type='password'
              name='passwordConfirm'
              id='passwordConfirm'
              placeholder='Password Confirm'
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </div>
          <div className='btn'>
            <button type='submit' className='btn-login'>
              Register
            </button>
          </div>
          <p className='option-login'>
            Already have an account?
            <Link to='/login' className='text-blue-500'>
              {' '}
              Sign in.
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

export default Signup;
