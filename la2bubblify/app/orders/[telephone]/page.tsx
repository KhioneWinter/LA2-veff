const URL = "http://localhost:3500";
import {AddOrderToCartButton} from "../../_components/AddToCartButton"

export default async function PrevOrdersPAge({params}: {params: Promise<{telephone:string}>}) {
  // Shows all the previous orders made from the chosen phone number, and can be added to cart
  const {telephone} = await params;
  const ordsersRes = await fetch(`${URL}/api/orders/${telephone}`);
  const bubblesRes = await fetch(`${URL}/api/bubbles`);

  if (!ordsersRes.ok) {
    return <p>No previous orders by that number found</p>
  }

  const orders = await ordsersRes.json();
  const bubbles = await bubblesRes.json();
  
  return (
  <div className="p-2">
    <h1 className="font-bold">Your previous orders!</h1>
    <div className="pb-5 grid grid-cols-2 gap-4">
      {orders.map((order: any, index: number) => {
        const orderItems = order.items
          .map((item: any) => {
            const bubble = bubbles.find((bub: any) => bub.id === item.id);
            if (!bubble) return null;
            return {
              id: bubble.id,
              name: bubble.name,
              price: bubble.price,
              image: bubble.image,
              quantity: item.quantity,
            };
          })
          .filter(Boolean);
          const totalFromOrder = orderItems.reduce((sum: number, item: any) => sum+ item.price * item.quantity, 0);

        return (
          <div key={index} className="bg-blue-200 p-3">
            <h2 className="font-bold">Order: {index + 1}</h2>
            {order.items.map((item: any) => {
              const bubble = bubbles.find((bub: any) => bub.id === item.id);
              if (!bubble) return null;
              return (
                <div key={item.id}>
                  <p className="font-bold">⟫ {bubble.name}</p>
                  <p className="px-3">- Price: {bubble.price} kr</p>
                  <p className="px-3 pb-3">- Quantity: {item.quantity}</p>
                </div>
              );
            })}
            <h2>Order total: {totalFromOrder}</h2>
            <AddOrderToCartButton items={orderItems} />
          </div>
        );
      })}
    </div>
  </div>
);
}
