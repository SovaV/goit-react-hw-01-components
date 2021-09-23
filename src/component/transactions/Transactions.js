import PropTypes from 'prop-types';
import t from '../transactions/transactions.module.css';

function Transaction({ items }) {
  return (
    <table className={t.transaction}>
      <thead>
        <tr>
          <th>type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ type, amount, currency, id }) => (
        <tbody key={id}>
          <tr className={t.tra}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transaction;
