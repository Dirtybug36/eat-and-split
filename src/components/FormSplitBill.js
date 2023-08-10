import { useState } from "react";
import Button from "./Button";

export function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [myBill, setMyBill] = useState("");
  const [totalBill, setTotalBill] = useState("");
  const friendsBill = totalBill ? totalBill - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function billHandler(e) {
    e.preventDefault();
    if (!totalBill || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendsBill : -myBill);
  }

  return (
    <form onSubmit={billHandler} className="form-split-bill">
      <h2>Split the bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input
        value={totalBill}
        onChange={(e) => setTotalBill(Number(e.target.value))}
      />
      <label>🤦‍♂️Your expenses</label>
      <input
        value={myBill}
        // this will ensure the myBill will not be greater than the total bill
        onChange={(e) =>
          setMyBill(
            Number(e.target.value) > totalBill ? myBill : Number(e.target.value)
          )
        }
      />
      <label>😁{selectedFriend.name} expense</label>
      <input disabled value={friendsBill} />
      <label>🫡Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
