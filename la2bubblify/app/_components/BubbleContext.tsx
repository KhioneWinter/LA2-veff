
export interface BubbleInf {
    // the bubble properties
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface BundlesInf {
    // Bundle properties
    id: number;
    name: string;
    items: number[];
}


// interface BubbleContext {
//     currentBubble: BubbleInf | null;
//     setBubbles: (bubble: BubbleInf) => void;
// }

