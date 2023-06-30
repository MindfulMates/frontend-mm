import authService from "../services/auth.service";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
 
const API_URL = "http://localhost:5005";
 
 
function ServiceListPage() {
  const [services, setServices] = useState([]);
 
  const getAllServices = () => {
    authService.api
      .get(`${API_URL}/api/service`)
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  };
 
  useEffect(() => {
    getAllServices();
  }, [] );
 
  console.log(services)
  
  return (
    <div className="ServiceListPage">
        <p>All Services</p>
            
      <h3>Show list of services:</h3>
      { services.map((service) => (
        <ServiceCard key={service._id} {...service} />
      ))}     

    </div>
  );
}
 
export default ServiceListPage;