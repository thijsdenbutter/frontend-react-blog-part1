import {useParams, Link} from "react-router-dom";
import posts from '../../constants/data.json';
import { formatDate } from '../../Helpers/formatDate.js'
import './Post.css';

function Post() {
    const {id} = useParams();
    const post = posts[id];
    console.log(post);
    return (
        <article className="post-container">
            <h1>{post.title} ({post.readTime} minuten)</h1>
            <h2>{post.subtitle}</h2>
            <p>Geschreven door <cite>{post.author}</cite> op {formatDate(post.created)}</p>
            <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} gedeeld</p>
            <Link className="nav-link-default" to="/posts">Terug naar de overzichtspagina</Link>
        </article>
    )
}

export default Post