//import {BundlesInf} from "../_components/BubbleContext";
import {BubbleInf} from "../../_components/BubbleContext";


const URL = "http://localhost:3500";

import Image from "next/image";
//import Link from "next/link";

import AddToCartButton from "../../_components/AddToCartButton";

export default async function AboutBubble({params}: {params: Promise<{id: string}>}) {
    // Showing nececery information for a specific bubble
    const {id} = await params;
    const res = await fetch(`${URL}/api/bundles/${id}`);
    
    if (!res.ok) {
        return <p>Chosen bundle not found</p>
    }

    const currBundle = await res.json();

    const bubblesRes = await fetch(URL + "/api/bubbles");
    const bubbles: BubbleInf[] = await bubblesRes.json();

    return (
        <div className="p-4 bg-blue-200">
            <p key={currBundle.id} className="font-bold text-[20px]">{currBundle.name}</p>
            <div>
            {currBundle.items.map((itemId: number ) => {
                const bubble = bubbles.find((b) => b.id === itemId);
                if (!bubble) return null;
                return (<div key={itemId}>
                    <Image 
                src={bubble.image}
                alt={bubble.name}
                width={200}
                height={200}
                className="bg-blue-50 rounded-xl"
            />
            <p className="font-bold pt-5">{bubble.name}</p>
            <p className="pt-2 pb-5">💲{bubble.price} kr</p>
                </div>)
                
            })}
            </div>
            <AddToCartButton item={{
                id: currBundle.id,
                name: currBundle.name,
                price: currBundle.items.reduce((total: number, itemId: number) => {
                    const bubble = bubbles.find((b) => b.id === itemId);
                    return total + (bubble?.price ?? 0);
                }, 0),
                image: bubbles.find((b) => b.id === currBundle.items[0])?.image ?? "",
                quantity: 1
            }} />
        </div>
    );
}

