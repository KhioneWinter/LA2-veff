'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";


export default  function ordersPAge() {
  // Where you can input your number to see all previous orders made by it
  const router = useRouter();
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  async function checkValidation() {
    if (!(number.length === 7) || !Number(number)) {
      setError("Phone number must be exactly 7 digits long");
      return;
    }
    setError("");
    const res = await fetch(`http://localhost:3500/api/orders/${number}`);
    if (!res.ok || (await res.json()).length === 0) {
      setError("No orders with this phone number found in server");
      return;
    }
    router.push(`/orders/${number}`);
  }

  return (
    <div className="p-2">
        <h1 className="font-bold">Orders</h1>
        <p >You can look at past orders by adding your phone number here:</p>
        <p className="pb-3">Needs to be exactly 7 numbers long</p>
        <div className="flex gap-5 pt-5">
          <input type="text" placeholder="Input phone number" value={number} onChange={(e) => setNumber(e.target.value)} className="p-2 w-70"/>
          <button onClick={checkValidation}  className="bg-blue-400 active:bg-blue-600 p-2 w-70">Continue to previous orders</button>
        </div>
      {error && <p className="pt-3">{error}</p>}
    </div>
  );
}
