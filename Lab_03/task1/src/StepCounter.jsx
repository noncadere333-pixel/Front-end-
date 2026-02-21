import { useState } from 'react';

function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const increment = () => {
    const newValue = count + step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  };

  const decrement = () => {
    const newValue = count - step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <p>Total operations: {operationCount}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h4>History (last 5)</h4>
      <ul>
        {history.slice(-5).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StepCounter;