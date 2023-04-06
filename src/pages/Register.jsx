import React, { useState } from 'react'

const Register = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const onInput = (e) => {
    setUsername(e.target.value)
  }

  const onInputPassword = (e) => {
    setPassword(e.target.value)
  }

  const register = async(e) => {
    e.preventDefault();
    const response = await fetch('https://techblog-api-m083.onrender.com/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {'Content-Type': 'application/json'},
    })
    if (response.status === 200) {
      alert('Registration Successful');
    } else {
      alert('Registration Failed');
    }
  }

  return (
         <form className="registration-form" onSubmit={register}>
           <h1>Register</h1>
            <input
             type="text"
             placeholder="username"
             value={username}
             onChange={onInput}
            />
        <input
            type="password"
            placeholder="password"
            value={password}
            onChange={onInputPassword}
        />
        <button className="form-btn">Register</button>
        </form>
  )
}

export default Register
