import PostTile from "../../components/post-tile/PostTile.jsx";
import './Posts.css'
import {useState, useEffect} from 'react'
import {fetchPosts} from "../../Helpers/apiData.js";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true)
        async function getPosts() {
            try {
                const result = await fetchPosts();
                setPosts(result);
            } catch (err) {
                setError("Er is iets fout gegaan bij het ophalen van de posts");
                console.error(err);
            }finally {
                setLoading(false)
            }
        }
        getPosts()
    }, []);

    return (
        <div className="posts-container">
            {error ? (<h1 className="error">{error}</h1>) :
                <>
                    <h1>Bekijk alle {posts.length} posts op het platform</h1>
                    {(!loading && posts.length > 0) && posts.map((post) => {
                        return (
                            <PostTile
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                author={post.author}
                                comments={post.comments}
                                shares={post.shares}
                            />
                        )
                    })}
                </>
            }
        </div>
    )
}

export default Posts;