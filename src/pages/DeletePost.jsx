
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';




const DeletePost = () => {

    const { id } = useParams();
    const [ title, setTitle ] = useState('');
    const [ summary, setSummary ] = useState('');
    const [ content, setContent ] = useState('');
    const [ files, setFiles ] = useState('');
    const [ redirect, setRedirect] = useState(false);
   

 
 
    useEffect(() => {
        fetch('https://techblog-api-m083.onrender.com/post/'+id)
            .then(response => {
                    response.json().then(postInfo => {
                        setTitle(postInfo.title);
                        setSummary(postInfo.summary);
                        setContent(postInfo.content);
            });
         });

    }, []);

    const onUpdateTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const onUpdateSummary = (e) => {
        setSummary(e.target.value)
    }

    const onUpdateFile = (e) => {
        setFiles(e.target.files)
    }

 
    const clickDeletePost = async () => {
    
     fetch('https://techblog-api-m083.onrender.com:4500/post' +id, {
            method: 'DELETE',
           
            credentials: 'include',
        })
        
    }
    
    

    

         
    if (redirect) {
        return <Navigate to={'/'} />
    }   
        
        

  return (
    <div>
        
    <button onClick={clickDeletePost}>Delete</button>
   
    </div>
  );
}

export default DeletePost
