import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/home/Home.jsx'
import NewPost from './Pages/new-post/NewPost.jsx'
import Posts from './Pages/posts/Posts.jsx'
import Post from './Pages/post/Post.jsx'
import PageNotFound from './Pages/page-not-found/PageNotFound.jsx'
import Nav from "./components/nav/Nav.jsx";

function App() {
    return (
        <>
            <Nav/>
            <div className="page-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/posts/:id" element={<Post/>}/>
                    <Route path="/nieuwe-post" element={<NewPost/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
