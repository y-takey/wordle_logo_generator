import React from "react";
import "./App.css";

import Input from "./Input";
import Result from "./Result";

function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Input onChange={setValue} />
        <Result text={value} />
      </header>
    </div>
  );
}

export default App;
