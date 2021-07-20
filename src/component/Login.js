import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../Images/AmazonLogo.png';
import './Login.css';

const Login = () => {
  return (
    <div className='loggin'>
      <Link to='/'>
        <img className='login__logo' src={logo} alt='amazon logo' />
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' />
          <h5>Password</h5>
          <input type='password' />
          <button className='login__signin'>Sign in</button>
        </form>
        <p>By sigining in you are agree to amazo's terms and condition</p>

        <button className='login__register'>Create your Amazon Account</button>
      </div>
    </div>
  );
};
export default Login;
