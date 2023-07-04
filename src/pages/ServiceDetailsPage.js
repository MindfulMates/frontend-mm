import { useEffect, useState } from "react";
// import TaskCard from "../components/ProjectCard"; 
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import servicesService from "../services/services.service";
// import AddService from "../components/AddService"
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";
import ReviewList from "../components/ReviewList";


function ServiceDetailsPage (props) {
  const [service, setService] = useState(null);
  const { serviceId } = useParams();
  
  const navigate = useNavigate()

  const getService = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/api/services/${serviceId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneService = response.data;
        setService(oneService);
      })
      .catch((error) => console.log(error));
  };

// delete Button preperation
  const deleteService = () => {
    const storedToken = localStorage.getItem("authToken");
    servicesService.deleteService(serviceId)
      .then((response) => {
        const oneService = response.data;
        navigate('/services');
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getService();
  }, [] );
 
  
  return (
    <div className="ServiceDetails">
      {service && (
        <>
          <h1>{service.title}</h1>
          <p>show reviews in here in numbers 1-5</p>

          <Link to={`/services/edit/${serviceId}`}>
        <button>Edit</button>
      </Link>  

          <p>add pictures here</p>
          <p>{service.place}</p>
          <p>{service.description}</p>
          <p>{service.price}</p>
          <p>{service.category}</p>
          <p>{service.date}</p>
          <p>{service.name}</p>
          <p>{service.email}</p>
          <p>Rate the service via review here</p>

        </>
      )}
      
      <AddReview refreshService={getService} serviceId={serviceId} />    
 
      { service && service.review.map((review) => (
        <ReviewCard key={review._id} {...review} /> 
      ))} 
      
      <ReviewList/>
   

   <button onClick={deleteService}>Delete</button>

      <Link to="/services">
        <button>Back to services</button>
      </Link>     
      
    </div>
  );
}
 
export default ServiceDetailsPage;