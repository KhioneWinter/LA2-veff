
import { createContext, useContext, useState} from 'react';

export interface BubbleInf {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

// interface BubbleContext {
//     currentBubble: BubbleInf | null;
//     setBubbles: (song: BubbleInf) => void;
// }

