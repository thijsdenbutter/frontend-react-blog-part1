import './PostTile.css'
import { Link } from "react-router-dom";

function PostTile({id, title, author, comments, shares }) {
    return (
        <Link className="post-tile" to={`./${id}`}>
            <h2>{title} (<cite>{author}</cite>)</h2>
            <p>{comments} reacties - {shares} gedeeld</p>
        </Link>
    )
}
export default PostTile;