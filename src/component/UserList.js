import Profile from './User';
import PropTypes from 'prop-types';

function UserList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li>
          <Profile
            name={item.name}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
}
UserList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default UserList;
