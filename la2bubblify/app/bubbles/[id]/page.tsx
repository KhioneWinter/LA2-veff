
const URL = "http://localhost:3500";

import Image from "next/image";
//import Link from "next/link";
import AddToCartButton from "../../_components/AddToCartButton";


export default async function AboutBubble({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const res = await fetch(`${URL}/api/bubbles/${id}`);
    
    if (!res.ok) {
        return <p>Chosen bubble not found</p>
    }

    const currBubble = await res.json();

    return (
        <div className="p-4 bg-blue-200 h-145">
            <Image 
                src={currBubble.image}
                alt={currBubble.name}
                width={200}
                height={200}
                className="bg-blue-50 rounded-xl"
            />
            <p className="font-bold pt-5">{currBubble.name}</p>
            <p className="pt-2 px-3">💲{currBubble.price} kr</p>
            <p className="px-3 pb-4">ℹ️{currBubble.description}</p>
            <AddToCartButton item={{
                id: currBubble.id,
                name: currBubble.name,
                price: currBubble.price,
                image: currBubble.image,
                quantity: 1
            }} />
        </div>
    );
}

