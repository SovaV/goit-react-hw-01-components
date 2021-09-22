import ProfileList from './component/ProfileList';
import FriendList from './component/FriendList';
import Statistics from './component/statistics/Statistics';
import TransactionHistory from './component/transactions/Transactions';

// import Section from './component/profile/Section';
import users from './user.json';
import statisticalData from './component/statistics/statistical-data.json';
import friends from './component/friends/friends.json';
import transactions from './component/transactions/transactions.json';

export default function App() {
  return (
    <div>
      <ProfileList items={users} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
