import React from "react";

import ProductCard from "../../components/card/ProductCard";
import productAPI from "../../services/productsAPI";
class Home extends React.Component {
    state = {
        ProductsList: productAPI.getAll()
    }
    render() {

        const { ProductsList } = this.state;
        return (
            <>
                <div className="list-product">
                    {ProductsList.map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )}


                </div>


            </>
        )
    }
}

export default Home;