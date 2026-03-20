import {BundlesInf} from "../_components/BubbleContext";
import {BubbleInf} from "../_components/BubbleContext";

const URL = "http://localhost:3500";

import Link from "next/link";
import Image from "next/image";

import AddToCartButton from "../_components/AddToCartButton";

export default async function AboutBubble() {
  let bundles: BundlesInf[] = [];

  try {
    const res = await fetch(URL + "/api/bundles");
    bundles = await res.json();
  } catch {
    return <p>Looks like something went wrong please try again </p>
  }

  const bubblesRes = await fetch(URL + "/api/bubbles");
  const bubbles: BubbleInf[] = await bubblesRes.json();

  return (
    <div className="grid grid-cols-3 gap-4 p-3">
      {bundles.map((bundle) => (
        <Link key={bundle.id} href={`/bundles/${bundle.id}`}>
        <div key={bundle.id} className="bg-blue-300 p-2 pl-6 ">
          {bundle.items.map((itemId: number) => {
            const bubble = bubbles.find((b) => b.id === itemId);
            if (!bubble) return null;
            return (
              <div key={itemId} className="bg-blue-300 pl-1">
                <Image src={bubble?.image ?? ""}
                alt={bubble?.name ?? ""}
                width={150}
                height={150}/>
                <p className="pb-2"> {bubble?.name}</p>
              </div>
            )
          })}
          <AddToCartButton item={{
              id: bundle.id,
              name: bundle.name,
              price: bundle.items.reduce((total: number, itemId: number) => {
                const bubble = bubbles.find((b) => b.id === itemId);
                return total + (bubble?.price ?? 0);
              }, 0),
              image: bubbles.find((b) => b.id === bundle.items[0])?.image ?? "",
              quantity: 1
          }} />
        </div>
        </Link>
        ))}
    </div>
  );
}
