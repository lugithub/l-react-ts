import React, { FC, FocusEvent, useState } from "react";
import Header from "./Header";

interface User {
  id: string;
  name: string;
}

const App: FC<User> = ({ id, name, children }, context) => {
  const [count, setCount] = useState<number>();
  // return null;

  function handleFocus(e: FocusEvent) {
    console.log(`${e.timeStamp}`);
    setCount(count === void 0 ? 0 : count + 1);
  }
  return (
    <>
      <Header />
      <h1>{name}</h1>
      <h2>{count}</h2>
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
