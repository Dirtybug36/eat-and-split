import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClickHandler }) {
  return (
    <button onClick={onClickHandler} className="button">
      {children}
    </button>
  );
}
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showFriendAddList, setShowFriendAddList] = useState(false);

  //to close and open the add friend form
  function onToggleButton() {
    setShowFriendAddList((show) => !show);
  }

  //to add new friend to the list
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFriendAddList(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        {friends.map((friend) => (
          <FriendList key={friend.id} friend={friend} />
        ))}
        {showFriendAddList && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClickHandler={onToggleButton}>
          {showFriendAddList ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendList({ friend }) {
  return (
    <ul className="sidebar">
      <li>
        <img alt="friend" src={friend.image} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owe you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            you owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>you and {friend.name} are even</p>}
        <Button>select</Button>
      </li>
    </ul>
  );
}

function FormAddFriend({ onAddFriend }) {
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
    <form onClick={handleSubmit} className="form-add-friend">
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

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with friends</h2>

      <label>💰Bill value</label>
      <input />
      <label>🤦‍♂️Your expenses</label>
      <input />
      <label>😁Friends expense</label>
      <input disabled />
      <label>🫡Who is paying the bill?</label>
      <select>
        <option>You</option>
        <option>Friend</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
export default App;
