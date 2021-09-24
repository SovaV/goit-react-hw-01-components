import Friends from './friends/Friends';
import PropTypes from 'prop-types';
import f from './friends/friends.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={f.item}>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <li key={id} className={f.list}>
          <Friends name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
export default FriendsList;
