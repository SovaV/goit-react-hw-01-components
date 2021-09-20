import PropTypes from 'prop-types';
import './Profile.css';
import defaultImage from '../default.jpg';

const Profile = ({ avatar = defaultImage, name, tag, location, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" width="300" height="300px" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="prof__item">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="prof__item">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="prof__item">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
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
