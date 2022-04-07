import React from "react";
import { connect } from "react-redux";
import '../../styles/card.scss'

class CartCheckout extends React.Component {
    handleCheckOut = ()=>{
        this.props.checkout();
    }
    render() {
        const { subTotal, itemNumber } = this.props;
        const total = subTotal + 4.99;
        return (
            <div className="checkout-box">
                <div className="checkout-box__container">
                    <div className="checkout-box__list-details-box">
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Subtotal</h1>
                            <h1 className="checkout-box__price">${subTotal}<p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Shipping</h1>
                            <h1 className="checkout-box__price">$4.99 <p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                        <div className="checkout-box__detail-box">
                            <h1 className="checkout-box__detail-title">Bag Total</h1>
                            <h1 className="checkout-box__price"><p className="checkout-box__price--quantily">({itemNumber} items)</p> ${total} <p className="checkout-box__price--unit">USD</p></h1>
                        </div>
                    </div>
                    <button onClick={()=>this.handleCheckOut()} className="checkout-box__btn">Proceed To Checkout</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkout: () => dispatch({ type: 'CHECKOUT' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartCheckout);