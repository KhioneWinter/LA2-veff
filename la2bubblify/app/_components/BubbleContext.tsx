
export interface BubbleInf {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface BundlesInf {
    id: number;
    name: string;
    items: number[];
}


// interface BubbleContext {
//     currentBubble: BubbleInf | null;
//     setBubbles: (song: BubbleInf) => void;
// }

