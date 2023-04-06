import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { format } from 'date-fns';
import img from '../assets/img.jpg';
import './postPage.css'



const PostPage = () => {
    const [ postInfo, setPostInfo ] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://techblog-api-m083.onrender.com/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, []);

    if (!postInfo) return '';


  return (
    <div className="post-page">
        <h1 className="post-page-title">{postInfo.title}</h1>
        <div className ="post-page-data">
        <time className="post-page-date">{format(new Date(postInfo.createdAt), 'd MMM,')}</time><span className="post-page-year">{format(new Date(postInfo.createdAt), 'yyyy')}</span><span className="dash">-</span><time className="post-page-time">{format(new Date(postInfo.createdAt),'HH:mm')}</time>
       </div>
        <div className="post-page-author">by @{postInfo.author.username}</div>

        {userInfo.id === postInfo.author._id && (
            <div className="allow-edit">
                <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                    Edit Post
                </Link>
               
               
            </div>
        )}
        <div className="post-page-image-container">
            { postInfo.cover ? (
           <img className="post-image" src={`https://techblog-api-m083.onrender.com/${postInfo.cover}`} alt="blog post image" />
            ):(<img className="post-image" src={img} alt="postImage" />)}
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  );
}

export default PostPage;
