import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h4>Hey its me sabbir.The boy</h4>
      <Test1 />
      <Test2 />
    </div>
  );
}
const Test1 = () => {
  return <h1>Test1</h1>;
};
const Test2 = () => {
  return <h1>Test2</h1>;
};
ReactDom.render(<Greeting />, document.getElementById("root"));
