import React from "react";
import ReactDom from "react-dom";
const books = [
  {
    id: 1,
    author: "sabbirdk",
    title: "I know who am I",
    image:
      "https://m.media-amazon.com/images/I/51+CYfFksWS._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg",
  },
  {
    id: 2,
    author: "sabbir",
    title: "I know  am I",
    image:
      "https://m.media-amazon.com/images/I/51+CYfFksWS._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg",
  },
];
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
const Book = ({ image, title, author }) => {
  const TestEvent = () => {
    alert("event is working");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  // console.log(props);
  // const { image, title, author } = props;
  return (
    <article onMouseOver={() => console.log(title)}>
      <img src={image} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <p>{author}</p>
      <button onClick={TestEvent}>Test Event</button>
      <p>
        <button onClick={complexExample(author)}>complex event</button>
      </p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
