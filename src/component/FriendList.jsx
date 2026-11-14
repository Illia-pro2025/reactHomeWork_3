import { FriendListItem } from "./FriendListItem";
export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => {
        return(<FriendListItem key={friend.id} {...friend} />)
      })}
    </ul>
  );
}
