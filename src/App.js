import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import { useState } from "react";
var Tabulator = require('tabulator-tables');

function App() {

  const [myState, setMyState] = useState(0);

  const handleOnClick = () => {
    // const newState = myState += 1;
    setMyState(myState + 1);
  }

  return (
    <div className="App">
      <h1>App State: {myState}</h1>
      <Title titleText={"Hey I'm a title"} onClickHandler={handleOnClick} />
    </div>
  );
}

export default App;
