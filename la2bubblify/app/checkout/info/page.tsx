'use client'

import {useCheckout} from "../../_components/CheckoutContext";
import {useRouter} from "next/navigation";


export default function deloveryPage() {
    const {updateCheckout, checkout} = useCheckout();
    const router = useRouter();
    
    return (
        <div className="p-2">
            <h1 className="font-bold pb-5">Necessery Inforamtion for order</h1>
            <div className="inline-grid grid-rows-6 gap-4">
                <input type="text" placeholder="Input name" value={checkout.name} onChange={(i) => updateCheckout("name", i.target.value)} className="pl-2"/>
                <input type="text" placeholder="Input phone number" value={checkout.phoneNum} onChange={(i) => updateCheckout("phoneNum", i.target.value)} className="pl-2"/>
                {checkout.deliveryMethod === "delivery" && (
                    <> 
                        <input type="text" placeholder="Input address" value={checkout.address} onChange={(i) => updateCheckout("address", i.target.value)} className="pl-2"/>
                        <input type="text" placeholder="Input city" value={checkout.city} onChange={(i) => updateCheckout("city", i.target.value)} className="pl-2"/>
                        <input type="text" placeholder="Input postalcode" value={checkout.postalCode} onChange={(i) => updateCheckout("postalCode", i.target.value)} className="pl-2"/>
                    </>
                )}
                <button onClick={() => router.push("/checkout/review")} className="bg-blue-400 p-2">Continue</button>
            </div>
        </div>
    );
} // Need to keep the name and phone number!


// deliveryMethod: "delivery" | "pickup";
//     name: string;
//     phoneNum: number;
//     address: string;
//     city: string;
//     postalCode: number;