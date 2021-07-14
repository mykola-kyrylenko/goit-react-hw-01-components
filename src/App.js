import Profile from './Profile/Profile';
import user from './user.json';
import Stats from './Profile/Stats';
import Statistics from './Statistics/Statistics';
import statisticalData from './statistical-data.json';
// import RandomColor from './Statistics/RandomColor';
import friends from './friends';
import FriendList from './FriendList/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
        <Stats
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}

        />
      </>
      
      <Statistics
        stats={statisticalData}
        title="Upload stats"

      // color={RandomColor()}
      />

      <FriendList
        friends={friends}
      />
      
      <TransactionHistory
        items={transactions}
      />;

      
        
    </div>
  )

}

export default App;
