import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle ,faRemove} from '@fortawesome/free-solid-svg-icons'
import '../../styles/card.scss'
class CartCard extends React.Component {
    render() {
        return (
            <>
                <div className="cart-card">
                    <FontAwesomeIcon className="cart-card__btn-remove" icon={faRemove} />
                    <div className="cart-card__image-box">
                        <img className="img-responsive" src="https://product.hstatic.net/200000376267/product/untitled_session09572_07d06e5045f44019938ffc8eaca71aff_grande.jpg" alt="" />
                    </div>
                    <div className="cart-card__infomation-box">
                        <div className="cart-card__infomation">
                            <h2 className="cart-card__product-name">Facial Cleanser</h2>
                            <h5 className="cart-card__product-size">Size: 7.60 fl oz / 225ml</h5>
                        </div>

                        <div className="cart-card__cart-box">
                            <h1 className="cart-card__product-price">$99</h1>
                            <div className="cart-card__quantity-box">
                                <FontAwesomeIcon className="cart-card__quantity-box--minus" icon={faMinusCircle} />
                                <h1 className="cart-card__quantity">01</h1>
                                <FontAwesomeIcon className="cart-card__quantity-box--plus" icon={faPlusCircle} />
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CartCard