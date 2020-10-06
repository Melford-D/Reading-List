import React, { useContext } from "react";
import { ReviewDetails } from "../Comment/ReviewDetails";

const RemoveReviews = ({ bookreview }) => {
  const { dispatch } = useContext(ReviewDetails);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_REVIEW", id: bookreview.id })}>
      <div className="review"> {bookreview.review} </div>
    </li>
  );
};

export default RemoveReviews;
