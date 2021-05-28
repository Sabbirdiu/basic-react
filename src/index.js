import React from "react";
import ReactDom from "react-dom";
import Book from "./Book";
import { books } from "./Books";
// const name = ["sabbir", "sawon", "alifa"];
// const newNames = name.map((sabbir) => {
//   return <h1>{sabbir}</h1>;
// console.log(newNames);
// });
// console.log(newNames);
function BookList() {
  return (
    <section>
      {books.map((boi) => {
        return <Book key={boi.id} {...boi} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
