import posts from '../../constants/data.json';
import PostTile from "../../components/post-tile/PostTile.jsx";
import './Posts.css'

function Posts() {
    return (
        <div className="posts-container">
            <h1>Bekijk alle {posts.length} op het platform</h1>
            {posts.map((post) => {
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
        </div>
    )
}

export default Posts;