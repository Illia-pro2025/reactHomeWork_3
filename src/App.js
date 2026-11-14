import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import { Profile } from "./component/Profile";
import { Statistics } from "./component/Statistics";
import { FriendList } from "./component/FriendList";
import { TransactionHistory } from "./component/TransactionHistory";
function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </>
  );
}

export default App;
