import authService from "../services/auth.service";
import AddService from "../components/AddService"; 
import { useEffect, useState } from "react";
// import ServiceCard from "../components/ServiceCard";
  
 
function AddNewService() {
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
    <div className="AddNewService">
        <p>Add New Service</p>
      
      <AddService refreshServices={getAllServices} />
      
    </div>
  );
}
 
export default AddNewService;