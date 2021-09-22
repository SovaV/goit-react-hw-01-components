import PropTypes from 'prop-types';
import s from '../statistics/statistics.module.css';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
