import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import './home.css';

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4500/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
   <div className="post-list-container">
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
   </div>
  );
}

export default Home
