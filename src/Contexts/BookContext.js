import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";
//import uuid here if you want to use the alternatively below

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

//Alternatively, do this methods loses data after page refreshes:

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, setBooks] = useState(
//     [
//       { title: "Name Of The Wind", author: "Patrick  Rothfuss", id: 1 },
//       { title: "The Final Empire", author: "Brandon Sanderson", id: 2 },
//     ]);
//   useEffect(() => {
//     localStorage.setItem("books", JSON.stringify(books));
//   }, [books]);

//   const addBook = (title, author) => {
//     setBooks([...books, { title, author, id: uuid() }]);
//   };
//   const removeBook = (id) => {
//     setBooks(books.filter((book) => book.id !== id));
//   };
//   return (
//     <BookContext.Provider value={{ books, addBook, removeBook }}>
//       {props.children}
//     </BookContext.Provider>
//   );
// };

// export default BookContextProvider;
