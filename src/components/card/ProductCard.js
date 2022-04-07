import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../../styles/card.scss'
class ProductCard extends React.Component {
    render() {
        return (<>
            <div className="card-product">
                <div className="card-product__content">
                    <div className="card-product__image-box">
                        <img className="img-responsive" src="https://product.hstatic.net/200000376267/product/untitled_session09572_07d06e5045f44019938ffc8eaca71aff_grande.jpg" alt=""/>
                    </div>
                    <div className="card-product__infomation-box">
                        <div className="card-product__infomation">
                            <h2 className="card-product__product-name">Facial Cleanser</h2>
                            <h5 className="card-product__product-type">Citrus refreshes senses</h5>
                        </div>

                        <div className="card-product__cart-box">
                            <h1 className="card-product__product-price">$99</h1>
                            <div className="card-product__cart-buy">
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default ProductCard;