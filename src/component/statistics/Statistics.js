import PropTypes from 'prop-types';
import './Profile.css';

const Statistics = ({ stat, title }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        <li class="item" key={stat.id}>
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
export default Statistics;
