'use client'

import {useCheckout} from "../../_components/CheckoutContext";
import {useRouter} from "next/navigation";


export default function deloveryPage() {
    const {updateCheckout} = useCheckout();
    const router = useRouter();
    
    function handleChoice(choice: "delivery" | "pickup") {
        updateCheckout("deliveryMethod", choice);
        router.push("/checkout/info");
    }
    
    
    
    return (
        <div className="p-2">
            <h1 className="font-bold pb-5">How would you like to recieve your order?</h1>
            <div className="flex gap-8">
                <button onClick={() => handleChoice("delivery")} className="bg-blue-400 p-2">Delivery to house</button>
                <button onClick={() => handleChoice("pickup")} className="bg-blue-400 p-2">Pickup at store</button>
            </div>
        </div>
    );
}
