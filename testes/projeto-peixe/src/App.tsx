import { useState } from "react";
import { Peixinho } from "./components/peixinho";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <Peixinho />;
}

export default App;
