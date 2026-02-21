import { useState } from 'react';
import './index.css';

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle highlight
      </button>

      <p className={isHighlighted ? 'highlight' : ''}>
        This paragraph can be highlighted.
      </p>
    </div>
  );
}

export default App;
