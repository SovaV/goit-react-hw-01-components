import PropTypes from 'prop-types';
import p from './Profile.module.css';
import defaultImage from '../default.jpg';

const Profile = ({ avatar = defaultImage, name, tag, location, stats }) => {
  const { followers, views, likes } = stats; // Деструктуризация
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
          <span className={p.quantity}>{followers}</span>
        </li>
        <li className={p.prof__item}>
          <span className={p.label}>Views</span>
          <span className={p.quantity}>{views}</span>
        </li>
        <li className={p.prof__item}>
          <span className={p.label}>Likes</span>
          <span className={p.quantity}>{likes}</span>
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
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile;
