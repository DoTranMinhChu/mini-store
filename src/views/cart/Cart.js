import React from "react";
import { connect } from "react-redux";
import CartCard from "../../components/card/CartCard";
import CartCheckout from "../../components/card/CartCheckout";

class Cart extends React.Component {
    handleRemoveProductToCart = (product) => {

        this.props.RemoveProductToCart(product)
    }
    handleChangeQuantity = (product, number) => {

        if (number === 1) {
            this.props.IncreaseQuantityProduct(product);
        }
        else if (number === -1) {
            this.props.DecreaseQuantityProduct(product);
        }

        this.setState({
            product: this.props.product
        })

    }

    handleCheckout = () => {
        this.props.Checkout();
    }
    render() {
        const { carts } = this.props;
        let subTotal = 0;
        let itemNumber = 0;
        return (
            <div className="cart">
                <div className="cart__cart-list">
                    {carts.map((product) => {
                        subTotal += product.price * product.quantity;
                        itemNumber += product.quantity;
                        return (<CartCard
                            key={product.id}
                            product={product}
                            handleRemoveProductToCart={this.handleRemoveProductToCart}
                            handleChangeQuantity={this.handleChangeQuantity} />)
                    })}


                </div>
                <div className="cart__checkout">
                    <CartCheckout
                        handleCheckout={this.handleCheckout}
                        subTotal={subTotal}
                        shipping={4.99}
                        itemNumber={itemNumber} />
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
        RemoveProductToCart: (product) => dispatch({ type: 'REMOVE_TO_CART', payload: product }),
        IncreaseQuantityProduct: (product) => dispatch({ type: 'INCREASE_QUANTITY_PRODUCT', payload: product }),
        DecreaseQuantityProduct: (product) => dispatch({ type: 'DECREASE_QUANTITY_PRODUCT', payload: product }),
        Checkout: () => dispatch({ type: 'CHECKOUT' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);