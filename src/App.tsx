import React, { FC } from "react";
import "./App.css";

interface User {
  id: string;
  name: string;
}

const App: FC<User> = ({ id, name, children }, context) => {
  // return null;

  return (
    <div className="App">
      {id} {name}
      {children}
    </div>
  );
};

export default App;
