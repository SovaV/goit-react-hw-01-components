import PropTypes from 'prop-types';
import f from './friends.module.css';

const Friends = ({ avatar, name, isOnline }) => {
  return (
    <div className={f.status}>
      <span className={isOnline ? f.online : f.ofline}>{isOnline}</span>
      <img className={f.avatar} src={avatar} alt="" width="48" />
      <p className={f.name}>{name}</p>
    </div>
  );
};
Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
};
export default Friends;
