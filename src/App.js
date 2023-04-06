import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Post from './components/Post';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostPage from './pages/PostPage';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/edit/:id' element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
