import React from 'react';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';
import img from '../assets/img.jpg';
import './post.css';

const Post = ({ _id, title, cover, summary, createdAt, author}) => {
 
  
  return (
    <div className="post">
      <div className="image-container">
        
        {cover ? (
        <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4500/'+cover} alt="postImage" /> 
        </Link>
        ): (
          <Link to={`/post/${_id}`}>
          <img src={img} alt="postImage" /> 
        </Link>
        )}
        
      </div>
      
      <div className="post-text">
        <Link to={`/post/${_id}`}>
          <h2 className="post-title">{title}</h2>
        </Link>
        <p className="data">
          <p className="author">by @{author.username}<span className="post-dash">-</span></p>
          <time className="date">{format(new Date(createdAt), 'd MMM,')}<span className="year">{format(new Date(createdAt), 'yyyy')}</span></time><time className="time">{format(new Date(createdAt), 'HH:mm')}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
  </div>
  );
}

export default Post
