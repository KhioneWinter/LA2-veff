
const URL = "http://localhost:3500";

import Image from "next/image";
//import Link from "next/link";


export default async function AboutBubble({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const res = await fetch(`${URL}/api/bubbles/${id}`);
    
    if (!res.ok) {
        return <p>Chosen bubble not found</p>
    }

    const currBubble = await res.json();

    return (
        <div className="p-4 bg-blue-200 h-134">
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
            <button className="bg-amber-100 rounded-xl h-10 w-30">Add to cart!</button>
        </div>
    );
}

