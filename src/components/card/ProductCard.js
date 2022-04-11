import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
class ProductCard extends React.Component {
    state = {
        product : this.props.product
    }
    handleAddToCart = () => {
        const { product } = this.props;
        this.props.AddProductToCart(product);
    }
    render() {
        const { product } = this.state;
        return (<>
            <div className="card-product">
                <div className="card-product__content">
                    <div className="card-product__image-box">
                        <img className="img-responsive" src={product.image} alt="" />
                    </div>
                    <div className="card-product__infomation-box">
                        <div className="card-product__infomation">
                            <h2 className="card-product__product-name">{product.name}</h2>
                            <h5 className="card-product__product-type">{product.type}</h5>
                        </div>

                        <div className="card-product__cart-box">
                            <h1 className="card-product__product-price">${product.price}</h1>
                            <div className="card-product__cart-buy" onClick={() => this.handleAddToCart()}>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}
const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddProductToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);