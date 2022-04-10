import React from "react";

import ProductCard from "../../components/card/ProductCard";
import productAPI from "../../services/productsAPI";
import Pagination from "react-js-pagination";

class Home extends React.Component {

    state = {

        ProductsList: productAPI.getAll(),
        activePage: 1
    }
    productPerPage = 6;
    sizelist = this.state.ProductsList.length;

    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const { ProductsList, activePage } = this.state;
        const { productPerPage, sizelist } = this;
        const begin = productPerPage * (activePage - 1);
        const end = productPerPage * activePage - 1;
        const items = [];
        for (let i = begin; i <= end; i++) {
            items.push(<ProductCard key={ProductsList[i].id} product={ProductsList[i]} />)
        }


        return (
            <>
                <div className="list-product">
                    {items}
                </div>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={productPerPage}
                    totalItemsCount={sizelist}
                    pageRangeDisplayed={3}
                    onChange={this.handlePageChange}
                />




            </>
        )
    }
}

export default Home;