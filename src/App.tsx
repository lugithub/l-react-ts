import React, { FC } from "react";
import Header from "./Header";

interface User {
  id: string;
  name: string;
}

const App: FC<User> = ({ id, name, children }, context) => {
  // return null;

  return (
    <>
      <Header />
      <h1>{name}</h1>
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
