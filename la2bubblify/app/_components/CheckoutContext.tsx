'use client'
// deliveryMethod, name, telephone number, address, city, postal code
import {useState, useEffect, createContext, useContext} from "react";

export interface CheckoutInfo {
    deliveryMethod: "delivery" | "pickup";
    name: string;
    phoneNum: string;
    address: string;
    city: string;
    postalCode: string;
} 

export interface CheckoutContextType {
    checkout: CheckoutInfo;
    updateCheckout: (field: keyof CheckoutInfo, value: string) => void;

}

export function useCheckout() {
    let value = useContext(CheckoutContext);
    if (!value) {
        throw new Error("Error came up with use of the useCheckout function");
    }
    return value;
}

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({children}: {children: React.ReactNode}) {
    const [checkout, setCheckout] = useState<CheckoutInfo>({
        deliveryMethod: "delivery",
        name: "",
        phoneNum: "",
        address: "",
        city: "",
        postalCode: "",
    });

    
    function updateCheckout(field: keyof CheckoutInfo, value: string) {
        setCheckout((prev) => ({...prev, [field]: value}));
    }

    return (
        <CheckoutContext.Provider value={{checkout, updateCheckout}}>
            {children}
        </CheckoutContext.Provider>
    );
}