import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartItemsString = window.localStorage.getItem("cartItems");
        const cart = cartItemsString ? JSON.parse(cartItemsString) : [];
        setCartItems(cart);
    }, []);

    const addCartItem = (product, quantity) =>{
        const findCartItem = cartItems.find((cartItem) => cartItem.product.id === product.id);
        if(findCartItem){
            findCartItem.quantity += quantity;
        }
        else{
            cartItems.push({product, quantity})
        }
        setCartItems([...cartItems]);
        window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    const deleteCartItem = (productId) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.product.id !== productId);
        setCartItems(newCartItems);
        window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    };

    const updateQuantity = (productId, quantity) => {
        const findCartItem = cartItems.find((cartItem) => cartItem.product.id === productId);
        if(!findCartItem){
            return
        }
        findCartItem.quantity = quantity;
        setCartItems([...cartItems]);
        window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    const validForCheckout = cartItems.length > 0 && cartItems.every(
        (cartItem) => cartItem.quantity % 1 === 0 && cartItem.quantity > 0
    );

    const checkout = () => {
        const totalPrice = cartItems.reduce((prev, cur) => prev + cur.quantity * cur.product.unitPrice, 0)
        axios.post("http://localhost:3001/orders", {orderedDate: new Date(), cartItems, totalPrice})
            .then(res => {
                setCartItems([]);
        })
        window.localStorage.setItem("cartItems", JSON.stringify([]));
    };

    return (<
        CartContext.Provider value={{cartItems, addCartItem, deleteCartItem, updateQuantity, validForCheckout, checkout}}>
            {children}
        </CartContext.Provider>);
}