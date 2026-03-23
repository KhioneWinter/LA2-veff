'use client'

import {useCart} from "../_components/CartContext";
import {useRouter} from "next/navigation";


export default function AboutBubble() {
  // shows the users current cart elements, updates when new items are added
  const router = useRouter();
  const {cart, removeFromCart, updateQuantity} = useCart();
  const totalAmount = cart.reduce((sum, item) => sum+item.price* item.quantity, 0)
  return (
    <div className="p-2">
        <h1 className="font-bold">Your current cart items</h1>
        <p>Items in cart: {cart.length}</p>
        <div className="grid grid-cols-3 pt-5 pb-5 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-blue-200 p-3">
              <p className="font-bold">{item.name}</p>
              <p className="pb-2">Total price : {item.price* item.quantity} kr</p>
              <button onClick={() => {
                if (item.quantity === 1) removeFromCart(item.id);
                else updateQuantity(item.id, item.quantity -1);
              }} className="font-bold"> - </button>
              <span className="font-bold"> {item.quantity} </span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="font-bold">+</button>
            </div>
          ))}
          
        </div>
        <h2>Total amount: {totalAmount} kr</h2>
          <div className="flex gap-5 pt-5">
            <button onClick={() => router.push("/checkout/delivery")} className="bg-blue-400 active:bg-blue-600 p-2 w-50 ">
            Continue to payment
          </button>
            <button onClick={() => router.push("/orders")} className="bg-blue-400 active:bg-blue-600 p-2 w-50">Check previous orders</button>
          </div>
        
    </div>
  );
}
