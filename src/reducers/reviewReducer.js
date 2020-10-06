import uuid from "uuid/dist/v1";

export const reviewReducer = (state, action) => {
  switch (action.type) {
    case "REVIEW_BOOK":
      return [
        ...state,
        {
          review: action.bookreview.review,
          id: uuid(),
        },
      ];
    case "REMOVE_REVIEW":
      return state.filter((bookreview) => bookreview.id !== action.id);

    default:
      return state;
  }
};
