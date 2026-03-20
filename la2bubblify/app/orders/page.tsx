'use client'


import {useState} from "react";
import {useRouter} from "next/navigation";



export default function currentOrder() {
  const router = useRouter();
  const [number, setNumber] = useState("");
  return (
    <div className="p-2">
        <h1 className="font-bold">Orders</h1>
        <p className="pb-3">You can look at past orders by adding your phone number here:</p>
        <input type="text" placeholder="Input phone number" value={number} onChange={(e) => setNumber(e.target.value)} className="p-2 w-70"/>
        <div className="flex gap-5 pt-5">
          <button onClick={() => router.push(`/orders/${number}`)} className="bg-blue-400 p-2 w-70">Continue</button>
          <button onClick={() => router.push("/checkout/delivery")} className="bg-blue-400 p-2 w-70">Continue to Checkout</button>
        </div>
    </div>
  );
}
