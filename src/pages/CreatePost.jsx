import React , { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { Navigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import Editor from '../components/Editor';


const CreatePost = () => {
   
    const [ title, setTitle ] = useState('');
    const [ summary, setSummary ] = useState('');
    const [ content, setContent ] = useState('');
    const [ files, setFiles ] = useState('');
    const [ redirect, setRedirect] = useState(false);


    const onTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const onSummaryInput = (e) => {
        setSummary(e.target.value)
    }


    const onFileChange = (e) => {
            setFiles(e.target.files)
    }

    const createNewPost = async (e) => {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        e.preventDefault();
       
        const response = await fetch('https://techblog-api-m083.onrender.com/post', {
            method: 'POST',
            body: data,
            credentials:'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
        
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }



  return (
    <form onSubmit={createNewPost}>
        <input type="title"
            value={title}
            placeholder={'Title'}
            onChange={onTitleInput}
        />
        <input type="summary"
            value={summary}
            placeholder={'Summary'}
            onChange={onSummaryInput}
        />
        <input type="file"
                onChange={onFileChange}
                
               
        />
        <Editor value={content} onChange={setContent} />
        <button type="submit">Create Post</button>

    </form>
  );
}

export default CreatePost
