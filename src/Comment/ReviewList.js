import React, { useContext } from "react";
import { ReviewDetails } from "../Comment/ReviewDetails";
import RemoveReviews from "../Comment/RemoveReviews";

const ReviewList = () => {
  const { bookreviews } = useContext(ReviewDetails);
  return bookreviews.length ? (
    <div className="book-list">
      <ul>
        {bookreviews.map((bookreview) => {
          return <RemoveReviews bookreview={bookreview} key={bookreview.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to review at the moment.</div>
  );
};

export default ReviewList;
