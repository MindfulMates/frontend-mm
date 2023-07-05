import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import servicesService from "../services/services.service"


function AddService(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");


  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the service id when creating the new review
    const { serviceId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { title, description, place, date, price, name, email, category, imageUrl, serviceId };

    const storesToken = localStorage.getItem("authToken")

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/newservice`, requestBody, { headers: { Authorization: `Bearer ${storesToken}` } })
      .then((response) => {
        // Reset the state to clear the inputs
        setTitle("");
        setDescription("");
        setPlace("");
        setDate("");
        setPrice("");
        setName("");
        setEmail("");
        setCategory("");
        setImageUrl("");

        // Invoke the callback function coming through the props
        // from the ServiceDetailsPage, to refresh the service details
        // props.refreshService();
        navigate("/services")
      })
      .catch((error) => console.log(error));
  };



  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    servicesService
      .uploadImage(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };



  return (
    <div className="AddService">
      <h3>Add New Service</h3>

      <form onSubmit={handleSubmit}>

        <label>Category:
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="" selected disabled> select an option</option>
            <option value="Yoga"> Yoga 🧘</option>
            <option value="Meditation"> Meditation 💆‍♀️</option>
            <option value="Massage"> Massage 💆‍♀️</option>
            <option value="SoundHealing"> SoundHealing 🔉</option>
            <option value="Other"> Other ❔</option>
          </select>
        </label>

        <input type="file" onChange={(e) => handleFileUpload(e)} />

        <label>Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>Description:
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>Place:
          <textarea
            type="text"
            name="place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </label>

        <label>Date:
          <textarea
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>Price:
          <textarea
            type="Number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>Name:
          <textarea
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>Email:
          <textarea
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddService;

