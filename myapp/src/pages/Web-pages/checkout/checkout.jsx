import React from "react";
import "./checkout.scss"

export const Checkout = () =>{
    return <div className="input-forms">
        <div className="bill-address">
         <h2>BILLING ADDRESS</h2>
         <div className="address-forms">
            <div className="forms">
                <label>
                    <input type="text" placeholder="First Name"/>
                </label>
                <label>
                    <input type="text" placeholder="Last Name"/>
                </label>
            </div>
            <div className="forms">
                <label>
                    <input type="text" placeholder="E-mail"/>
                </label>
                <label>
                    <input type="text" placeholder="Mobile Number"/>
                </label>
            </div>
            <div className="forms">
                <label>
                    <input type="text" placeholder="Address Line 1"/>
                </label>
                <label>
                    <input type="text" placeholder="Address Line 2"/>
                </label>
            </div>
            <div className="forms">
                <label>
                    <input type="text" placeholder="Country"/>
                </label>
                <label>
                    <input type="text" placeholder="City"/>
                </label>
            </div>
            <div className="forms">
                <label>
                    <input type="text" placeholder="State"/>
                </label>
                <label>
                    <input type="text" placeholder="ZIP Code"/>
                </label>
            </div>
            <div className="checkox-forms">
              <div className="checkboxes">
                <input type="checkbox" />
                <p>Create an account</p>
              </div>
              <div className="checkboxes">
                <input type="checkbox" />
                <p>Ship to different address</p>
              </div>
            </div>
         </div>
        </div>
        <div className="orders">
                <h2>Products</h2>
            <div className="order-details">
                <div className="details">
                    <p>Product Name 1</p>
                    <p>$150</p>
                </div>
                <div className="details">
                    <p>Product Name 2</p>
                    <p>$150</p>
                </div>
                <div className="details">
                    <p>Product Name 3</p>
                    <p>$150</p>
                </div>
                <div className="amount">
                 <div className="payment-amount">
                    <h6>Subtotal</h6>
                    <p>$150</p>
                 </div>
                 <div className="payment-amount">
                    <h6>Shipping</h6>
                    <p>$10</p>
                 </div>
                </div>
                <div className="payment-total">
                    <h4>Total</h4>
                    <p>$160</p>
                </div>
                
            </div>
            <div className="payment-types">
                    <h2>Payment</h2>
                <div className="type">
                 <div className="types">
                    <input type="radio" />
                    <p>Paypal</p>
                 </div>
                 <div className="types">
                    <input type="radio" />
                    <p>Direct Check</p>
                 </div>
                 <div className="types">
                    <input type="radio" />
                    <p>Bank Transfer</p>
                 </div>
                 <div className="payment-button">
                    <button>Place Order</button>
                 </div>
                </div>
            </div>
        </div>
       
    </div>
}