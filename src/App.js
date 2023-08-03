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

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        {initialFriends.map((lists) => (
          <List key={lists.id} image={lists.image} name={lists.name} />
        ))}
        <Form />
        <button className="button">Close</button>
      </div>
      <Bill />
    </div>
  );
}

function List({ image, name }) {
  return (
    <ul className="sidebar">
      <li>
        <img alt="friend" src={image} />
        <h3>{name}</h3>
        <p>hello</p>
        <button className="button">select</button>
      </li>
    </ul>
  );
}

function Form() {
  return (
    <form className="form-add-friend">
      <p>Friend name</p>

      <input />
      <p>image URL</p>
      <input />
      <button className="button">Add</button>
    </form>
  );
}

function Bill() {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with friends</h2>

      <p>Bill value</p>
      <input />
      <p>Your expenses</p>
      <input />
      <p>Friends expense</p>
      <p></p>
      <p>Who is paying the bill?</p>
      <select>
        <option>You</option>
        <option>Friend</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
export default App;
