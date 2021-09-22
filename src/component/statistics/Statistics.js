import PropTypes from 'prop-types';
import s from '../statistics/statistics.module.css';
import getRandomColor from '../helper/randomColor';

function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item} style={{ backgroundColor: getRandomColor() }}>
            <span className={s}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
