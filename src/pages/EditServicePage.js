import axios from "axios";
import AddService from "../components/AddService"; 
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
 
const API_URL = "http://localhost:5005";
 
 
function ServiceListPage() {
  const [services, setServices] = useState([]);
 
  const getAllServices = () => {
    axios
      .get(`${API_URL}/api/services`)
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  };
 
  useEffect(() => {
    getAllServices();
  }, [] );
 
  
  return (
    <div className="ServiceListPage">
        <p>All Services</p>
      
      <AddService refreshServices={getAllServices} />
      
      { services.map((service) => (
        <ServiceCard key={service._id} {...service} />
      ))}     

    </div>
  );
}
 
export default ServiceListPage;