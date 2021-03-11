import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ name, tag, location, avatar }) {

  return (
    <div className={s.profile} key={tag}>
      <div className={s.description}>
        <img
          src={avatar}
          alt={"Аватар пользователя"}
          className={s.imgProfile}
        />
        <div className={s.profileinfo}>
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
        
      </div>
    </div>
  );
};


Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
