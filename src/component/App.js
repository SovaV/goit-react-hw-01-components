import Profile from './profile/Profile';
import FriendList from './FriendList';
import Statistics from './statistics/Statistics';
import TransactionHistory from './transactions/Transactions';

// import Section from './component/profile/Section';
import user from './profile/user.json';
import statisticalData from './statistics/statistical-data.json';
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
