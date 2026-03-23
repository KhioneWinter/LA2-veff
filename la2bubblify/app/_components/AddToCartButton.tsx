'use client'

import {useCart, CartItem} from "./CartContext";

interface AddToCartButtonProps {
    // A cart item that gets added when the button is pressed
    item: CartItem;
}

interface AddOrderToCartButtonProps {
    // An array of items to add to the cart when the button is pressed
    items: CartItem[];
}




export default function AddToCartButton({item}: AddToCartButtonProps) {
    // function for the buttons on the bubbles and bundles to add the the cart
    const {addToCart} = useCart();
    return (
        <button onClick={() => addToCart(item)} className="bg-amber-100 active:bg-amber-300 rounded-xl h-10 w-30">Add to cart!</button>
    )
}


export function AddOrderToCartButton({items}: AddOrderToCartButtonProps) {
    // Function for the buttons from the orders to the cart, works similarly
    const {addMultipleToCart} = useCart();
    return (
        <button onClick={() => addMultipleToCart(items)} className="bg-amber-100 active:bg-amber-300 rounded-xl h-10 w-30">Add to cart!</button>
    )
}