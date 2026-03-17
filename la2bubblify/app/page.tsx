// 'use client'

import {BubbleInf} from "./_components/BubbleContext";

// import {useState, useEffect, useRouter} from 'react';
import Image from "next/image";
import Link from "next/link";




const URL = "http://localhost:3500";


export default async function Home() {
  let bubbles: BubbleInf[] = [];
  
  try {
    const res = await fetch(URL + "/api/bubbles");
    bubbles = await res.json();
  } catch {
    return <p>Looks like something went wrong please try again </p>
  }

  return (
    <div className="card-container">
      {bubbles.map((bubble) => (
        <Link key={bubble.id} href={`/bubbles/${bubble.id}`}>
          <div>
            <Image 
              src={bubble.image}
              alt={bubble.name}
              width={300}
              height={300}
            />
            <h2>{bubble.name}</h2>
            <p>{bubble.price}</p>
          </div>
        </Link>
        ))}
    </div>
  );
}
