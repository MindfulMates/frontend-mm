import axios from "axios";
// We are deconstructing the props object directly in the parentheses of the function
function ReviewCard({ review, description, friendly }) {
    return (
      <div className="ReviewCard card">
        <h3>{review}</h3>
        <h4>Description:</h4>
        <p>{description}</p>
        <h4>Was the person friendly?:</h4>
        <p>{friendly}</p>
      </div>
    );
  }
  
  export default ReviewCard;
  