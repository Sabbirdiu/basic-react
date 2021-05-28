import React from "react";
import ReactDom from "react-dom";
const books = [
  {
    author: "sabbirdk",
    title: "I know who am I",
    image:
      "https://m.media-amazon.com/images/I/51+CYfFksWS._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg",
  },
  {
    author: "sabbir",
    title: "I know  am I",
    image:
      "https://m.media-amazon.com/images/I/51+CYfFksWS._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg",
  },
];
const name = ["sabbir", "sawon", "alifa"];
const newNames = name.map((sabbir) => {
  return <h1>{sabbir}</h1>;
  // console.log(newNames);
});
console.log(newNames);
function BookList() {
  return <section>{newNames}</section>;
}
const Book = ({ image, title, author, children }) => {
  // console.log(props);
  return (
    <section>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{children}</p>
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
