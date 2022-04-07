import React from "react";
import { connect } from "react-redux";
import CartCard from "../../components/card/CartCard";
import CartCheckout from "../../components/card/CartCheckout";

class Cart extends React.Component {
    render() {
        const { carts } = this.props;
        let subTotal = 0;
        let itemNumber = 0;
        return (
            <div className="cart">
                <div className="cart__cart-list">
                    {carts.map((product) => {
                        subTotal += product.price;
                        itemNumber+=product.quantity;
                        return (<CartCard key={product.id} product={product} />)
                    })}


                </div>
                <div className="cart__checkout">
                    <CartCheckout subTotal={subTotal} itemNumber={itemNumber}/>
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);