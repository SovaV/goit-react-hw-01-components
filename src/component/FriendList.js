import Friends from './friends/Friends';
import PropTypes from 'prop-types';
import f from './friends/friends.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={f.item}>
      {friends.map(friend => (
        <li key={friend.id} className={f.list}>
          <Friends name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
        </li>
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default FriendsList;
