import Profile from './profile/Profile';
import PropTypes from 'prop-types';

function ProfileList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
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
ProfileList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default ProfileList;
