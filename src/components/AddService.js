import { useState } from "react";
import axios from "axios";
 
const API_URL = "http://localhost:5005";


function AddService(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

 
  
  const handleSubmit = (e) => {      
    e.preventDefault();
 
    // We need the service id when creating the new review
    const { serviceId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, place, date, price, name, email, serviceId};
 
    axios
      .post(`${API_URL}/api/service`, requestBody)
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
        setPlace("");
        setDate("");
        setPrice("");
        setName("");
        setEmail("")

      
        // Invoke the callback function coming through the props
        // from the ServiceDetailsPage, to refresh the service details
        props.refreshService();
      })
      .catch((error) => console.log(error));
  };
 
  
  return (
    <div className="AddService">
      <h3>Add New Service</h3>
      
      <form onSubmit={handleSubmit}>

        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
 
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Place:</label>
        <textarea
          type="text"
          name="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />

        <label>Date:</label>
        <textarea
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Price:</label>
        <textarea
          type="Number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Name:</label>
        <textarea
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <textarea
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
 
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}
 
export default AddService;

