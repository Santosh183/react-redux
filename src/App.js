import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { countActions } from './redux/countReducer'

function App() {
  console.log();
  const counter = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const increment = () => {
    // dispatch({ type: 'INC' });
    dispatch(countActions.increment());
  }
  const decrement = () => {
    // dispatch({ type: 'DEC' });
    dispatch(countActions.decrement());
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
