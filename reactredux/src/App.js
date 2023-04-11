import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "./redux/counter";

const App = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>React Redux Tutorial</h1> 
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
