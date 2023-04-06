import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Login = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  const onUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const onPasswordInput = (e) => {
    setPassword(e.target.value)
  }

  const submitLogin = async (e) => {
    e.preventDefault();
     const response = await fetch('http://localhost:4500/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers:{'Content-Type': 'application/json'},
      credentials:'include',
    });
    if (response.ok) {
       response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });  
    } else {
      alert('Please check that your username and password are correct.')
    }
  }

 if (redirect) {
    return <Navigate to={'/'} />
  
  }
  return (
  
        
        <form className="login-form" onSubmit={submitLogin}>
           <h1>Login</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={onUsernameInput}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={onPasswordInput}
            />
            <button className='form-btn' type="submit">Login</button>
        </form>
   
  );
}

export default Login
