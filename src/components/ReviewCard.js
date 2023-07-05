import axios from "axios";
// We are deconstructing the props object directly in the parentheses of the function
function ReviewCard({ review, description, friendly }) {
    return (
      <div className="ReviewCard card">
        <p>Rating: {review}</p>
        <p>Description:</p>
        <p>{description}</p>
        <p>Was the person friendly?: {friendly.toString()}</p>
      </div>
    );
  }
  
  export default ReviewCard;
  