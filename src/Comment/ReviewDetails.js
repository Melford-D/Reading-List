import React, { createContext, useReducer, useEffect } from "react";
import { reviewReducer } from "../reducers/reviewReducer";

export const ReviewDetails = createContext();

const ReviewDetailsProvider = (props) => {
  const [bookreviews, dispatch] = useReducer(reviewReducer, [], () => {
    const reviewData = localStorage.getItem("bookreviews");
    return reviewData ? JSON.parse(reviewData) : [];
  });
  useEffect(() => {
    localStorage.setItem("bookreviews", JSON.stringify(bookreviews));
  }, [bookreviews]);
  return (
    <ReviewDetails.Provider value={{ bookreviews, dispatch }}>
      {props.children}
    </ReviewDetails.Provider>
  );
};

export default ReviewDetailsProvider;
