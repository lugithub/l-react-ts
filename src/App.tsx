import React, { FC, FocusEvent } from "react";
import Header from "./Header";

interface User {
  id: string;
  name: string;
}

const App: FC<User> = ({ id, name, children }, context) => {
  // return null;

  function handleFocus(e: FocusEvent) {
    console.log(`${e.timeStamp}`);
  }
  return (
    <>
      <Header />
      <h1>{name}</h1>
      <input onFocus={handleFocus} />
    </>
  );

  // return (
  //   <div className="App">
  //     {id} {name}
  //     {children}
  //   </div>
  // );
};

export default App;
