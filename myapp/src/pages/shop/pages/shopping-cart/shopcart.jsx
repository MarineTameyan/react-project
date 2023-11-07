import React from "react";
import "./shopcart.scss"
import { Cart } from "../../components/cart/cart";

export const ShopCart = () =>{
    return <div className="cart-list">
        <div className="cart-component">
        <div className="titles">
            <div className="paragraphs">
                <p>Products</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                </div>
        </div>
            <Cart/>
        </div>
        <div className="payment">
            <p className="summary">CART SUMMARY</p>
            <div className="payment-details">
                <div className="sum">
                    <h6>Subtotal</h6>
                    <p>$150</p>
                </div>
                <div className="shipping">
                    <h6>Shipping</h6>
                    <p>$10</p>
                </div>
                <div className="total">
                    <h6>Total</h6>
                    <p>$160</p>
                </div>
                <div className="payment-button">
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    </div>
}