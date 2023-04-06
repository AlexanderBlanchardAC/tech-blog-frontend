import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './header.css';

const Header = () => {

  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('https://techblog-api-m083.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logoutUser = () => {
    fetch('https://techblog-api-m083.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

const username = userInfo?.username;

  return (
    <header className="header-container">
      <Link to="/" className="main-title"> Tech Blog</Link>
      <nav className="header-navigation">
        {username && (
          <>
            <Link className="create-post" to="/create">Create New Blog Post</Link>
            <a className="logout-user" onClick={logoutUser}>Logout ({username})</a>
          </>
        )}
        {!username && (
         <>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
         </>
        )}
      </nav>
    </header>
  );
}

export default Header
