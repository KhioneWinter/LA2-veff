'use client'

import {useCart, CartItem} from "./CartContext";

export default function AddToCartButton({item}: {item: CartItem}) {
    const {addToCart} = useCart();
    return (
        <button onClick={() => addToCart(item)} className="bg-amber-100 rounded-xl h-10 w-30">Add to cart!</button>
    )
}