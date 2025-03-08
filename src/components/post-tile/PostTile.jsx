import './ProductTile.css'
import { Link } from "react-router-dom";

function ProductTile({id, title, author, comments, shares }) {
    return (
        <Link className="product-tile" to={`./${id}`}>
            <h2>{title} (<cite>{author}</cite>)</h2>
            <p>{comments} reacties - {shares} gedeeld</p>
        </Link>
    )
}
export default ProductTile;