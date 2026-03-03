import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Ahmed",
    age: 14
  }

  let myArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className="bg-yellow-400 text-black p-6 rounded-xl mb-4">React Course</h1>

      {/* these are props which we are giving to Card.jsx */}
      <Card username = "Hassan" btnText = "Scroll for more" />
      <Card btnText = "Read more" />
    </>
  );
}

export default App;
