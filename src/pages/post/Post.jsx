import {useParams, Link} from "react-router-dom";
import {formatDate} from '../../Helpers/formatDate.js'
import './Post.css';
import {useEffect, useState} from "react";
import {fetchPost} from "../../Helpers/apiData.js";


function Post() {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);

        async function getPost() {
            try {
                const post = await fetchPost(id);
                setPost(post);
            } catch (err) {
                console.error(err);
                setError("Er is iets fout gegaan bij het ophalen van de post");
            } finally {
                setLoading(false);
            }
        }

        getPost();
    }, []);
    return (
        <>
            {error ? <h1>{error}</h1> :
                <>
                    {!loading &&
                        <article className="post-container">
                            <h1>{post.title} ({post.readTime} minuten)</h1>
                            <h2>{post.subtitle}</h2>
                            <p>Geschreven door <cite>{post.author}</cite> op {formatDate(post.created)}</p>
                            <p>{post.content}</p>
                            <p>{post.comments} reacties - {post.shares} gedeeld</p>
                            <Link className="nav-link-default" to="/posts">Terug naar de overzichtspagina</Link>
                        </article>}
                </>
            }
        </>
    )
}

export default Post