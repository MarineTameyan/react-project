import { Link } from "react-router-dom";
import { routerLinks } from "../../router/router";
import "./index.scss"

export const ProductCard = ({ data }) => {
    return <Link to={routerLinks.DETAIL.replace(':id', data.id)} className="product-list">
        <img src={data.src} alt="" />
        <h5>{data.product}</h5>
        <p>{data.price}</p>
    </Link>
}