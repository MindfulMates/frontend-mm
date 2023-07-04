import axios from "axios";
import { useState } from "react";

 
function AddReview(props) {
  const [review, setReview] = useState("");
  const [description, setDescription] = useState("");
  const [friendly, setFriendly] = useState("");

 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { review, description, friendly };
   
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');
   
    // Send the token through the request "Authorization" Headers
    axios
      .post(
      `${process.env.REACT_APP_SERVER_URL}/api/reviews`,
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => {
      // Reset the state
      setReview("");
      setDescription("");
      setFriendly("");
      props.refreshReviews();
    })
      .catch((error) => console.log(error));
  };
 
  return (
    <div className="AddReview">
      <h3>Add Review</h3>
 
      <form>
        <label>Review:</label>
        <input
          type="Number"
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
 
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Friendly:</label>
        <textarea
          type="boolean"
          name="friendly"
          value={friendly}
          onChange={(e) => setFriendly(e.target.value)}
        />
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default AddReview;