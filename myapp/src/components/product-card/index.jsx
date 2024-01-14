import { Link } from "react-router-dom";
import { routerLinks } from "../../router/router";
import "./index.scss"

export const ProductCard = ({ data }) => {
    return <Link to={routerLinks.DETAIL.replace(':id', data._id)} className="product-list">
        <img src={data.image} alt="" />
        <h5>{data.name}</h5>
        <p>{data.price}</p>
    </Link>
}