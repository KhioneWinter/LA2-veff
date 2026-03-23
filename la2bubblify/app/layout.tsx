import "./globals.css";
import Header from "./_components/_header";
import {CartProvider} from "./_components/CartContext";
import {CheckoutProvider} from "./_components/CheckoutContext";

export default function RootLayout({
  // Layout of the whole program, you know pretty cool stuff
  // this project was so long lmao 
  // I really liked the project idea just aaaaallllllllootttttttt to do  to make it work （；´д｀）ゞ
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-white min-h-screen flex flex-col">
        <CartProvider>
          <CheckoutProvider>
            <Header/>
            <main className="flex-1">
              {children}
            </main>
          </CheckoutProvider>
        </CartProvider>
      </body>
    </html>
  );
}
