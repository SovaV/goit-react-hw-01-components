import ProfileList from './component/ProfileList';
import Statistics from './component/StatisticsList';

// import Section from './component/profile/Section';
import users from './user.json';
import statisticalData from './component/statistics/statistical-data..json';

export default function App() {
  return (
    <div>
      {/* <Section title="Топ недели"> */}
      <ProfileList items={users} />
      {/* </Section> */}
      <Statistics items={statisticalData} />
    </div>
  );
}
