import React from "react";
import ReviewDetailsProvider from "./Comment/ReviewDetails";
import Reviews from "./Comment/Reviews";
import NewBookForm from "./components/BookForm";
import BookList from "./components/BookList";
import ReviewList from "./Comment/ReviewList";
import NavBar from "./components/NavBar";
import BookContextProvider from "./Contexts/BookContext";

function App() {
  return (
    <>
      <div className="App">
        <BookContextProvider>
          <ReviewDetailsProvider>
            <NavBar />
            <BookList />
            <ReviewList />
            <NewBookForm />
            <Reviews />
          </ReviewDetailsProvider>
        </BookContextProvider>
      </div>
    </>
  );
}

export default App;
