import s from "./FriendList.module.css";

function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <li className={s.friend} key={friend.id}>
                    <span className={friend.isOnline ? s.online : s.offline}>{ friend.isOnline}  </span>
                    <img className={s.avatar} src={friend.avatar} alt="avatar" width="48" />
                    <p className={s.friendName}>{ friend.name}</p>
                </li>
            ))}
      
        </ul>
    )
    
}


export default FriendList;



