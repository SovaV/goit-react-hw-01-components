import PropTypes from 'prop-types';
import p from './Profile.module.css';
import defaultImage from '../default.jpg';

const Profile = ({ avatar = defaultImage, name, tag, location, stats }) => {
  return (
    <div className={p.profile}>
      <div className={p.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={p.avatar}
          width="300"
          height="300px"
        />
        <p className={p.name}>{name}</p>
        <p className={p.tag}>@{tag}</p>
        <p className={p.location}>{location}</p>
      </div>

      <ul className={p.stats}>
        <li className={p.prof__item}>
          <span className={p.label}>Followers</span>
          <span className={p.quantity}>{stats.followers}</span>
        </li>
        <li className={p.prof__item}>
          <span className={p.label}>Views</span>
          <span className={p.quantity}>{stats.views}</span>
        </li>
        <li className={p.prof__item}>
          <span className={p.label}>Likes</span>
          <span className={p.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
