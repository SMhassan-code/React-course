import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  // let counter = 5;
  let [counter, setCounter] = useState(5) // useState() is a hook

  function addValue() {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  function decreaseValue() {
    if (counter > 0) {
      setCounter(--counter)
    }  
  }


  return (
    <>
      <h1>React course</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decreaseValue}>decrease value {counter}</button>
      <p>Value: {counter}</p>
    </>
  );
}

export default App;
