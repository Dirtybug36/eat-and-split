import Button from "./Button";

export default function FriendList({ friend, onHandleFriendsData }) {
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
        {/* very imp! */}
        <Button onClickHandler={() => onHandleFriendsData(friend)}>
          select
        </Button>
      </li>
    </ul>
  );
}
