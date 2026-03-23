'use client'


import {useCart} from "../../_components/CartContext";
import {useCheckout} from "../../_components/CheckoutContext";
import {useRouter} from "next/navigation";
import {submitOrder} from "../../actions";


export default function currentOrder() {
    const router = useRouter();
    const {cart} = useCart();
    const {checkout} = useCheckout();
    
    async function Conformation() {
        const phone = checkout.phoneNum.trim();
        if (!/^\d{7}$/.test(phone)) {
            alert("Phone number must be 7 digits long");
            return;
        }

        await submitOrder(
            { items: cart.map((i) => ({ id: i.id, quantity: i.quantity })) },
            phone
        );
        router.push("/checkout/success");
    }
    
    return (
        <div className="p-2">
            <h1 className="font-bold pb-3">Your current order</h1>
            <div className="pb-5">
            {cart.map((item) => (
                <div key={item.id} className="bg-blue-200 p-3">
                <p className="font-bold">⟫ {item.name}</p>
                <p className="px-3">- Total price : {item.price}</p>
                <p className="px-3 pb-3">- Total quantity : {item.quantity}</p>
                <hr/>
                </div>
            ))}
            </div>
            <h3 className="pb-5">Satisfied with the order?</h3>
            <button onClick={Conformation} className="bg-blue-400 p-2 ">
            Conferm
            </button>
        </div>
    );
}
