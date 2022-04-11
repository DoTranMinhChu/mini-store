import { toast } from "react-toastify";
const initState = {
    carts: [

    ],
    user: {

    },
    infomation: {
    }

}

const rootReducer = (state = initState, action) => {

    let { carts, user, infomation } = state;
    let payload = action.payload;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            let prevProduct = carts.filter((item) => item.id === payload.id);
            if (prevProduct.length > 0) {
                index = carts.findIndex((item) => item.id === payload.id);
                carts[index].quantity = carts[index].quantity + 1;
            } else {
                payload.quantity = 1;
                carts = [...carts, payload]
            }
            toast.success("Successfully added product from cart");
            return { ...state, carts };
        case 'REMOVE_TO_CART':
            carts = carts.filter((item) => item.id !== payload.id)
            toast.success("Successfully removed product from cart");
            return { ...state, carts };        
        case 'INCREASE_QUANTITY_PRODUCT':
            index = carts.findIndex((item) => item.id === payload.id);
            carts[index].quantity = carts[index].quantity + 1;
            return { ...state, carts };
        case 'DECREASE_QUANTITY_PRODUCT':
            index = carts.findIndex((item) => item.id === payload.id);
            carts[index].quantity = carts[index].quantity - 1;
            if (carts[index].quantity === 0) {
                carts = carts.filter((item) => item.id !== payload.id)
                toast.success("The product has been removed from the cart");
            }
            return { ...state, carts };
        case 'CHECKOUT':
            carts = [];
            toast.success("Successfully checkout");
            return { ...state, carts };
        case 'LOGIN':
            user = payload;
            if (!infomation.email) {
                infomation.email = user.email;
            }
            if (!infomation.fullName) {
                infomation.fullName = user.name;
            }
            toast.success("Successful login");
            return { ...state, user, infomation }
        case 'LOGOUT':
            user = {}
            infomation = {}
            toast.success("Successful logout");
            return { ...state,infomation, user }
        case 'SAVE_INFOMATION':
            infomation = payload;
            toast.success("Successfully save information");
            return { ...state, infomation }
        default:
            return state;
    }
}

export default rootReducer