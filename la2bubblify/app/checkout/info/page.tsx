'use client'

import {useCheckout} from "../../_components/CheckoutContext";
import {useRouter} from "next/navigation";


export default function informationPage() {
    // The information showed in the browser after choding the delivery method
    // More is shown if you choose to get the items delivered 
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

                <button onClick={() => {
                    // All error checks for the user input, pretty basic tbh only checking if empty and if the integer values are valid
                    const itemsDelivered = checkout.deliveryMethod === "delivery";
                    if (!checkout.name.trim()) {
                        alert("Please insert name into correnct feild");
                        return;
                    }

                    if (!checkout.phoneNum.trim() || checkout.phoneNum.trim().length !== 7 || !Number(checkout.phoneNum)) {
                        alert("Please insert a 7 digit phone number into correnct feild");
                        return;
                    }

                    if (itemsDelivered && !checkout.address.trim() ) {
                        alert("Please insert address into correnct feild");
                        return;
                    } 
                    if (itemsDelivered && !checkout.city.trim()) {
                        alert("Please insert city into correnct feild");
                        return;
                    } 
                    if (itemsDelivered && (!checkout.postalCode.trim() || !Number(checkout.postalCode))) {
                        alert("Please insert postal code number into correnct feild");
                        return;
                    } 
                    router.push("/checkout/review")}} className="bg-blue-400 active:bg-blue-600 p-2">Continue</button>
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