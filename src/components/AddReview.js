import axios from "axios";
import { useState } from "react";

import Form from 'react-bootstrap/Form';


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

    <Form className="add-review-form" onSubmit={handleSubmit}>
      <h4>Rate your Mate!</h4>

      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="Number"
          min={1}
          max={5}
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)} />
        <Form.Text className="text-muted">
          Rate numbers from 1 (worse) to 5 (awesome).
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Was your Mate friendly?</Form.Label>
        <Form.Select onChange={(e) => setFriendly(e.target.value)}>
          <option value="disabled" selected > select an option</option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>

        </Form.Select>
      </Form.Group>

      <button className="button-overlay-review" type="submit">
        Submit
      </button>

    </Form>


  );
}

export default AddReview;