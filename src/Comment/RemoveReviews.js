import React, { useContext } from "react";
import { ReviewDetails } from "../Comment/ReviewDetails";

const RemoveReviews = ({ bookreview }) => {
  const { dispatch } = useContext(ReviewDetails);
  return (
    <div>
      <ul>
        <li
          onClick={() => dispatch({ type: "REMOVE_REVIEW", id: bookreview.id })}
        >
          <div className="author"> {bookreview.review} </div>
        </li>
      </ul>
    </div>
  );
};

export default RemoveReviews;
