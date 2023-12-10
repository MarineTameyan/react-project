import { useNavigate } from "react-router-dom";
import { routerLinks } from "../../../../../router/router";
import './shopBox.scss'

export const ShopBox = ({offerData}) => {
const navigate  = useNavigate()
    const goToOfferDetails = ()=>{
        navigate(routerLinks.DETAIL.replace(':id', offerData.id))
    }
    return <div className="offer-box G-flex-column G-center" style={{backgroundImage:`url('${offerData.image}')`}}>
        <p>SAVE {offerData.percent}%</p>
        <p>Special offer</p>
        <div className="offer-button" onClick={goToOfferDetails}>
            <button>Shop Now</button>
        </div>
    </div>
}