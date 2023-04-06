import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';






const EditPost = () => {

  
    

    const { id } = useParams();
    const [ title, setTitle ] = useState('');
    const [ summary, setSummary ] = useState('');
    const [ content, setContent ] = useState('');
    const [ files, setFiles ] = useState('');
    const [ redirect, setRedirect] = useState(false);
   

 
 
    useEffect(() => {
        fetch('http://localhost:4500/post/'+id)
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


    const updatePost = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        const response = await fetch('http://localhost:4500/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });

    
            if (response.ok) {
            setRedirect(true);
            }
    
    }

         
    if (redirect) {
        return <Navigate to={'/post/'+id} />
    }   
        

  return (
    <div>
        
    <form>
        <input type="title"
            value={title}
            placeholder={'Title'}
            onChange={onUpdateTitle}
        />
        <input type="summary"
            value={summary}
            placeholder={'Summary'}
            onChange={onUpdateSummary}
        />
        <input type="file"
            onChange={onUpdateFile}
           
        />
        <Editor value={content} onChange={setContent} />
        <button onClick={updatePost}>Update Post</button>
    </form>
    </div>
  );
}

export default EditPost
