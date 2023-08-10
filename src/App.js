import { useState } from "react";
import FormSplitBill from "./components/FormSplitBill";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import Button from "./components/Button";

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
  const [friends, setFriends] = useState(initialFriends);
  const [showFriendAddList, setShowFriendAddList] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  //to close and open the add friend form
  function onToggleButton() {
    setShowFriendAddList((show) => !show);
  }

  //to add new friend to the list //very imp
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFriendAddList(false);
  }

  //to pass the selected person information
  function handleSelectedFriend(friendsData) {
    // setSelectedFriend(friendsData);
    setSelectedFriend((curFriend) =>
      curFriend?.id === friendsData.id ? null : friendsData
    );
    setShowFriendAddList(false);
  }

  //split bill and update our initial friendList accordingly !imp
  //we are updating the initialFriends balance with the value we will get after splitting the bill
  function splitBill(value) {
    setFriends((friend) =>
      friend.map((curFriend) =>
        curFriend.id === selectedFriend.id
          ? { ...curFriend, balance: curFriend.balance + value }
          : curFriend
      )
    );
    setSelectedFriend(null); //closing the form
  }

  return (
    <div className="app">
      <div className="sidebar">
        {friends.map((friend) => (
          <FriendList
            key={friend.id}
            friend={friend}
            onHandleFriendsData={handleSelectedFriend}
          />
        ))}
        {showFriendAddList && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClickHandler={onToggleButton}>
          {showFriendAddList ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={splitBill}
        />
      )}
    </div>
  );
}

export default App;
