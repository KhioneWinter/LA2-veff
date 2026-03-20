'use client'

import {useState, useEffect, createContext, useContext} from "react";

export interface CartItem{
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (item:CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

export function useCart() {
    let value = useContext(CartContext);
    if (!value) {
        throw new Error("Error came up with use of the useCart function");
    }
    return value;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({children}: {children: React.ReactNode}) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(item: CartItem) {
        setCart((prev) => {
            const existingItem = prev.find((i) => i.id === item.id); 
            if (existingItem) {
                return prev.map((i) => i.id === item.id?{...i, quantity: i.quantity + 1}: i); // Changes amount
            }
            return [...prev, {...item, quantity: 1}]; // adds the new item
        });
    }

    function removeFromCart(id: number) {
        setCart((prev) => prev.filter((i)=> i.id !== id)); // Keeps everything but the filtered item
    }

    function updateQuantity(id: number, quantity: number) {
        setCart((prev) => prev.map((i) => i.id === id ? {...i, quantity}: i) ); // fiinds and updates
    }

    function clearCart() {
        setCart([]);
    }

    useEffect (() =>{
        const storedBubs = localStorage.getItem("cart");
        if (storedBubs) setCart(JSON.parse(storedBubs));
    }, []);

    useEffect (() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    );
}