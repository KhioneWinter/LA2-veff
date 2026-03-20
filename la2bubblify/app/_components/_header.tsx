import Link from "next/link";

export default function Header() {

  return (
    <aside className="top-style">
      <nav className="nav-bar bg-blue-400 h-10 flex items-center gap-6">
        <Link href={`/`} className="text-style px-2 text-white text-[20px] font-bold">Bubblify! 🫧</Link>
        <Link href={`/bubbles`} className="text-white">Bubbles</Link>
        <Link href={`/bundles`} className="text-white">Bundles</Link>
        <Link href={`/about`} className="text-white">About Us</Link>
        <Link href={`/cart`} className="text-white">Cart</Link>
        {/* <Link href={`/orders`} className="text-white">Orders</Link> */}
        </nav>
    </aside>
  );
}