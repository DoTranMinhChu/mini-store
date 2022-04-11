import React from "react";
import { connect } from "react-redux";
import CartCard from "../../components/card/CartCard";
import CartCheckout from "../../components/card/CartCheckout";
import Payment from "../../components/peyment/Payment";
class Cart extends React.Component {
    state = {
        isPayment: false
    }
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

    handleOpenCheckout = () => {
        this.setState({
            isPayment: true
        })
    }
    handleCheckout = () => {
        this.props.Checkout();
        this.setState({
            isPayment: false
        })
    }
    handleBackPayment = () => {
        this.setState({
            isPayment: !this.state.isPayment
        })

    }
    render() {
        const { carts } = this.props;
        let subTotal = 0;
        let itemNumber = 0;
        const shipping = 4.99;
        let listCart = carts.map((product) => {
            subTotal += product.price * product.quantity;
            itemNumber += product.quantity;
            return (<CartCard
                key={product.id}
                product={product}
                handleRemoveProductToCart={this.handleRemoveProductToCart}
                handleChangeQuantity={this.handleChangeQuantity} />)
        })
        const total = subTotal + shipping;
        const infomationShip = `Order value: ${total} $ | Address: ${this.props.infomation.address} | Phone Number: ${this.props.infomation.phoneNumber}  | Consignee: ${this.props.infomation.fullName}`;
        return (
            !this.props.carts.length ?
                <>
                    <div>Cart is empty</div>
                </>
                :
                <>
                    {
                        this.state.isPayment &&
                        <Payment
                            onCheckout={this.handleCheckout}
                            onBackPayment={this.handleBackPayment}
                            timeCountdown={600000}
                            total={total}
                            infomation={infomationShip}
                            orderID={Math.floor(Math.random() * 1000000)}
                        />
                    }
                    < div className="cart" >
                        <div className="cart__cart-list">

                            {listCart}

                        </div>
                        <div className="cart__checkout">
                            <CartCheckout
                                handleCheckout={this.handleOpenCheckout}
                                subTotal={subTotal}
                                shipping={shipping}
                                itemNumber={itemNumber} />
                        </div>
                    </div >
                </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        carts: state.carts,
        infomation: state.infomation
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