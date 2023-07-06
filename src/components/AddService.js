import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import servicesService from "../services/services.service"

import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';


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

    const { serviceId } = props;
    const requestBody = { title, description, place, date, price, name, email, category, imageUrl, serviceId };
    const storesToken = localStorage.getItem("authToken")

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/newservice`, requestBody, { headers: { Authorization: `Bearer ${storesToken}` } })
      .then((response) => {
        setTitle("");
        setDescription("");
        setPlace("");
        setDate("");
        setPrice("");
        setName("");
        setEmail("");
        setCategory("");
        setImageUrl("");

        navigate("/services")
      })
      .catch((error) => console.log(error));
  };


  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    servicesService
      .uploadImage(uploadData)
      .then(response => {
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };



  return (
    <div className="Forms">

      <Row xs={1} md={2} className="HomePage-rows1">
        <div>

          <Form className="add-review-form" onSubmit={handleSubmit}>
            <h4>Add a new service</h4>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select onChange={(e) => setCategory(e.target.value)}>
                <option value="disabled" selected > select an option</option>
                <option value="Yoga"> Yoga 🧘</option>
                <option value="Meditation"> Meditation 💆‍♀️</option>
                <option value="Massage"> Massage 💆‍♀️</option>
                <option value="SoundHealing"> SoundHealing 🔉</option>
                <option value="Other"> Other ❔</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Add picture</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => handleFileUpload(e)} />

              <Form.Text className="text-muted">
                Choose a picture to show other Mates about your service!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Let people know if you do home visits or have a studio!
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Service hours</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="Number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <button className="button-overlay-review" type="submit">
                Add Service
              </button>

          </Form>

        </div>

        <div>
          <img className="HomePage-Icon2" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688584803/Bild3_ftiwnv.png" alt="logo" />
        </div>
      </Row >

    </div>
  );
}

export default AddService;

