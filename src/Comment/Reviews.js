import React, { useContext, useState } from "react";
import { ReviewDetails } from "./ReviewDetails";

const Reviews = () => {
  const { dispatch } = useContext(ReviewDetails);
  const [review, setReview] = useState("");
  const handleBookReview = (e) => {
    e.preventDefault();
    dispatch({
      type: "REVIEW_BOOK",
      bookreview: { review },
    });
    setReview("");
    // console.log(review);
  };
  return (
    <div className="reviews">
      <h2>Review A Book</h2>
      <form onSubmit={handleBookReview}>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        <input type="submit" value="submit your review" />
      </form>
    </div>
  );
};

export default Reviews;
