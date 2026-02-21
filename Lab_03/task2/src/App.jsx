import { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>

      <UserProfile userId={userId} />
    </>
  );
}

export default App;