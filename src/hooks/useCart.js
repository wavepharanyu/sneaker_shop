import {useContext} from "react";
import {CartContext} from '../contexts/cart';

const useCart = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
}

export default useCart;