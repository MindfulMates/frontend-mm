import axios from "axios";
import { useState } from "react";


function AddReview(props) {
  const [review, setReview] = useState("");
  const [description, setDescription] = useState("");
  const [friendly, setFriendly] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { review, description, friendly, serviceId: props.serviceId };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/review`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setReview("");
        setDescription("");
        setFriendly("");
        props.refreshService();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddReview">
      <h3>Add Review</h3>

      <form onSubmit={handleSubmit}>
        <label>Rate the service 1 worse - 10 awesome?:</label>
        <input
          type="Number"
          min={1}
          max={10}
          // step={0.5}
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
        <select
          name="friendly"
          value={friendly}
          onChange={(e) => setFriendly(e.target.value)}
        >
          <option value="" selected disabled> select an option</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReview;