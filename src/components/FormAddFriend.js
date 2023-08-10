import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  //controlled inputs
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name && !image) return;
    const id = crypto.randomUUID();
    const newFriend = { name, image: `${image}?=${id}`, id, balance: 0 };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label>📸Image URL</label>
      <input
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
