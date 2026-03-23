'use client'


import {useCart} from "../../_components/CartContext";
import {useCheckout} from "../../_components/CheckoutContext";
import {useRouter} from "next/navigation";
import {submitOrder} from "../../actions";


export default function currentOrder() {
    // Shows the items being baught so the user can review and finalize the order
    const router = useRouter();
    const {cart} = useCart();
    const {checkout} = useCheckout();
    const totalAmount = cart.reduce((sum, item) => sum+item.price* item.quantity, 0);
    
    async function Conformation() {
        await submitOrder(
            { items: cart.map((i) => ({ id: i.id, quantity: i.quantity })) },
            checkout.phoneNum
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
                <p className="px-3">- Total price : {item.price * item.quantity}</p>
                <p className="px-3 pb-3">- Total quantity : {item.quantity}</p>
                <hr/>
                </div>
            ))}
            </div>
            <h2>Total amount: {totalAmount} kr</h2>
            <h3 className="pb-5">Satisfied with the order?</h3>
            <button onClick={Conformation} className="bg-blue-400 active:bg-blue-600 p-2 ">
            Conferm
            </button>
        </div>
    );
}
