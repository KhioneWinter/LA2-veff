'use client'

import {useCart} from "../_components/CartContext";
import {useRouter} from "next/navigation";


export default function AboutBubble() {
  const router = useRouter();
  const {cart, removeFromCart, updateQuantity} = useCart();
  return (
    <div className="p-2">
        <h1 className="font-bold">Your current cart items</h1>
        <p>Items in cart: {cart.length}</p>
        <div className="grid grid-cols-3 pt-5 pb-5 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-blue-200 p-3">
              <p className="font-bold">{item.name}</p>
              <p className="pb-2">Total price : {item.price}</p>
              <button onClick={() => {
                if (item.quantity === 1) removeFromCart(item.id);
                else updateQuantity(item.id, item.quantity -1);
              }} className="font-bold"> - </button>
              <span className="font-bold"> {item.quantity} </span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="font-bold">+</button>
            </div>
          ))}
        </div>
        <button onClick={() => router.push("/orders")} className="bg-blue-400 p-2 ">
          Proceed to checkout
        </button>
    </div>
  );
}
