import UserList from './component/UserList';
import users from './user.json';
import Section from './component/Section';

export default function App() {
  return (
    <div>
      <Section title="Топ">
        <UserList items={users} />
      </Section>

      <Section />
    </div>
  );
}
