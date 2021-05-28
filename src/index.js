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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
          nesciunt obcaecati velit natus quasi nemo excepturi dolor ipsa quo
          soluta odit quod totam quas ducimus animi, magni iste voluptates.
        </p>
      </Book>
      <Book
        author={secoundbook.author}
        title={secoundbook.title}
        image={secoundbook.image}
      />
    </div>
  );
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
