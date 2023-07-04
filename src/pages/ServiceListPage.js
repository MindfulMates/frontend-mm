import authService from "../services/auth.service";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";


 
function ServiceListPage() {
  const [services, setServices] = useState([]);
 
  const getAllServices = () => {
    authService.api
      .get(`${process.env.REACT_APP_SERVER_URL}/api/services`)
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error));
  };
 
  useEffect(() => {
    getAllServices();
  }, [] );
 
  console.log(services)
  
  return (
    <div className="ServiceListPage">
           
      <h3>Find your Service:</h3>

    { services.map((service) => (
        <ServiceCard key={service._id} {...service} />
      ))}  

    </div>
  );
}
 
export default ServiceListPage;