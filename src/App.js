import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INC' });
  }
  const decrement = () => {
    dispatch({ type: 'DEC' });
  }

  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
