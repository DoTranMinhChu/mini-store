import ProductData from "../assets/data/ProductsAPI.json"

const productAPI = {
    getAll: () => {
        return ProductData.data
    },
    getSize: () => {
        return ProductData.size
    }


}
export default productAPI;
