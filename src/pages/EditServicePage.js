import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";  //  <== IMPORT 
import servicesService from "../services/services.service";

  
function EditServicePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");


  const { serviceId } = useParams();
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("authToken");

 
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/services/${serviceId}`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneService = response.data;
        setTitle(oneService.title);
        setDescription(oneService.description);
        setPlace(oneService.place);
        setDate(oneService.date);
        setPrice(oneService.price);
        setName(oneService.name);
        setEmail(oneService.email);
        setCategory(oneService.category)
      })
      .catch((error) => console.log(error));
    
  }, [serviceId]);
  
  // update Button preperation
  const updateService = (e) => {
    e.preventDefault();
    const requestBody = { title, description, place, date, price, name, email, category };
    servicesService.updateService(serviceId, requestBody)
      .then((response) => {
        const oneService = response.data;
        navigate('/services');
      })
      .catch((error) => console.log(error));
  };
 
  
  
  return (
    <div className="EditServicesPage">
      <h3>Edit your Service</h3>
 
      <form onSubmit={updateService}>

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
 
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
 
export default EditServicePage;