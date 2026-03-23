'use client'

import {useCart, CartItem} from "./CartContext";

interface AddToCartButtonProps {
    item: CartItem;
}

interface AddOrderToCartButtonProps {
    items: CartItem[];
}




export default function AddToCartButton({item}: AddToCartButtonProps) {
    const {addToCart} = useCart();
    return (
        <button onClick={() => addToCart(item)} className="bg-amber-100 rounded-xl h-10 w-30">Add to cart!</button>
    )
}


export function AddOrderToCartButton({items}: AddOrderToCartButtonProps) {
    const {addMultipleToCart} = useCart();
    return (
        <button onClick={() => addMultipleToCart(items)} className="bg-amber-100 rounded-xl h-10 w-30">Add order to cart!</button>
    )
}