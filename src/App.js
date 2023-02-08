import {useState} from 'react';
import {useEffect} from 'react';
import './App.css';

const App =()=> {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've set the counter to " + counter)
  }, [counter])
  return (
    <div className="App">
      <button onClick={() => setCounter(prevCount => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <h1>yes</h1>
      <button onClick={() => setCounter(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
