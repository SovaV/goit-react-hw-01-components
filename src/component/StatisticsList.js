import Statistics from './statistics/Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ items }) {
  return (
    <section>
      {/* <h2>{title}</h2> */}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Statistics title="Upload stats" stats={item.lable} />;
            <Statistics stats={item.percentage} />;
          </li>
        ))}
      </ul>
    </section>
  );
}
StatisticsList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default StatisticsList;
