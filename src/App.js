import { useState } from "react";
import "./App.css";
import Arrow from "./Arrow";
import Numbers from "./Numbers";

function App() {
  const [counter, setCounter] = useState([1, 2, 3, 4, 5]);

  const increment = () => {
    if (counter[4] < 20) {
      const newNumbers = counter.map((position) => (position += 1));
      setCounter(newNumbers);
    }
  };

  const decrement = () => {
    if (counter[0] > 0) {
      const newNumbers = counter.map((position) => (position -= 1));
      setCounter(newNumbers);
    }
  };
  return (
    <>
      <Arrow text="<<" actionOnClick={decrement} />
      {counter.map((square, i) => (
        <Numbers key={i} text={square} />
      ))}
      <Arrow text=">>" actionOnClick={increment} />
    </>
  );
}

export default App;
