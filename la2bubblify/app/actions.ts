'use server'

export async function submitOrder(orderData: any, telephone: string) {
  const res = await fetch(`http://localhost:3500/orders/${telephone}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });

  // Add this to see what the API returns
  const text = await res.text();
  console.log("API response:", text);

  if (!res.ok) throw new Error("Order submit failed, please try again");
  return JSON.parse(text);
}