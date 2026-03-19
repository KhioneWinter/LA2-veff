// 'use client'

import {BubbleInf} from "../_components/BubbleContext";

// import {useState, useEffect, useRouter} from 'react';
import Image from "next/image";
import Link from "next/link";

const URL = "http://localhost:3500";

export default async function BubblesPage() {
  let bubbles: BubbleInf[] = [];
  
  try {
    const res = await fetch(URL + "/api/bubbles");
    bubbles = await res.json();
  } catch {
    return <p>Looks like something went wrong please try again </p>
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-3">
      {bubbles.map((bubble) => (
        <Link key={bubble.id} href={`/bubbles/${bubble.id}`}
          className="bg-blue-300 h-70 rounded-sm">
          <div className="px-5">
            <Image 
              src={bubble.image}
              alt={bubble.name}
              width={200}
              height={200}
            />
            <h2>{bubble.name}</h2>
            <p className="pb-3">{bubble.price}</p>
            <button className="bg-amber-100 rounded-xl h-10 w-30">Add to cart!</button>
          </div>
        </Link>
        ))}
    </div>
  );
}
