import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function App() {

  useEffect(() => {
    console.log(a)
    // console.log([1,2,3].map((i) => i))
  }, [])

  return <div>hello webpack5111!</div>;
}
ReactDOM.render(<App />, document.getElementById("root"));
