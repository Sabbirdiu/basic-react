import React from "react";
import ReactDom from "react-dom";
const firstbook = {
  author: "sabbirdk",
  title: "I know who am I",
  image:
    "https://m.media-amazon.com/images/I/51+CYfFksWS._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg",
};
const secoundbook = {
  author: "sabbir",
  title: "I know  am I",
  image:
    "https://m.media-amazon.com/images/I/51+CYfFksWS._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg",
};

function BookList() {
  return (
    <div>
      <h4>Hey its me sabbir.The boy</h4>
      <Book
        author={firstbook.author}
        title={firstbook.title}
        image={firstbook.image}
      />
      <Book
        author={secoundbook.author}
        title={secoundbook.title}
        image={secoundbook.image}
      />
    </div>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <section>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.author}</p>
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
