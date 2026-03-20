import "./globals.css";
import Header from "./_components/_header";
import Footer from "./_components/_footer";
import {CartProvider} from "./_components/CartContext";
import {CheckoutProvider} from "./_components/CheckoutContext";

export default function RootLayout({
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
            {/* <Footer/> */}
          </CheckoutProvider>
        </CartProvider>
      </body>
    </html>
  );
}
