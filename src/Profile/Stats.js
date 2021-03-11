import PropTypes from 'prop-types';
import s from './Stats.module.css';

function Stats({followers, views, likes}) {
    
    return (
        <>
            <ul className={s.stats}>
                <li className={s.statsProfile}>
                    <span className={s.label}>Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li className={s.statsProfile}>
                    <span className={s.label}>Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li className={s.statsProfile}>
                    <span className={s.label}>Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </>
    );
};


Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  
};

export default Stats;
