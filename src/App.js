import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "./redux/reducers/counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  return (
    <div className="App">
      Count: {counter}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>By payload</button>
    </div>
  );
}

export default App;
