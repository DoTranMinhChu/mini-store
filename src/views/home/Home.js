import React from "react";
import ProductCard from "../../components/card/ProductCard";

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="list-product">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>


            </>
        )
    }
}

export default Home;