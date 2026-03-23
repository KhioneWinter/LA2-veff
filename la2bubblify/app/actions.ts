'use server'

export async function submitOrder(orderData: any, phonenumber: string) {
  console.log("Calling URL:", `http://localhost:3500/api/orders/${phonenumber}`);
  console.log("Sending body:", JSON.stringify(orderData));
  
  const res = await fetch(`http://localhost:3500/api/orders/${phonenumber}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });

  const text = await res.text();
  console.log("Status:", res.status);
  console.log("API response:", text);

  if (!res.ok) throw new Error("Order submit failed, please try again");
  return JSON.parse(text);
}