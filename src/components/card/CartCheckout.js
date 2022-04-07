import React from "react";
import '../../styles/card.scss'

class CartCheckout extends React.Component {
    render() {
        return (
            <div className="checkout-box">
                <div className="checkout-box__container">
                    <div className="checkout-box__list-details-box">
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Subtotal</h1>
                            <h1 className="checkout-box__price">$45.99 <p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Shipping</h1>
                            <h1 className="checkout-box__price">$4.99 <p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Bag Total</h1>
                            <h1 className="checkout-box__price"><p className="checkout-box__price--quantily">(4 items)</p> $50.98 <p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                    </div>
                    <button className="checkout-box__btn">Proceed To Checkout</button>
                </div>
            </div>
        )
    }
}

export default CartCheckout;