import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import { ReviewDetails } from "../Comment/ReviewDetails";

const NavBar = () => {
  const { books } = useContext(BookContext);
  const { bookreviews } = useContext(ReviewDetails);
  return (
    <div className="navbar">
      <h1>Melford Reading List</h1>
      <p>Currently you have {books.length} books to get through</p>
      <p>You reviewed {bookreviews.length} books</p>
    </div>
  );
};

export default NavBar;
