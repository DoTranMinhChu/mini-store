import React from "react";
import CartCard from "../../components/card/CartCard";
import CartCheckout from "../../components/card/CartCheckout";

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                <div className="cart__cart-list">
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
                <div className="cart__checkout">
                    <CartCheckout/>
                </div>
            </div>
        )
    }
}

export default Cart;