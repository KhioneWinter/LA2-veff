'use client'


import {useCart} from "../../_components/CartContext";
import {useRouter} from "next/navigation";
import { useEffect } from "react";


export default function currentOrder() {
    const router = useRouter();
    const {clearCart} = useCart();

    async function ConformationHome() {
        router.push("/checkout/success");
    }

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <div className="p-2">
            <h1 className="font-bold">Successful order confirmation! 🎊</h1>
            <p>We will let you know when your bubbles are on their way!</p>
            <button onClick={ConformationHome} className="bg-blue-400">Back to homepage</button>
        </div>
    );
}
