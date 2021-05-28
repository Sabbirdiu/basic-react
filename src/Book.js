import React from "react";

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

export default Book;
