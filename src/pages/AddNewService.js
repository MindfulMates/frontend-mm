import authService from "../services/auth.service";
import AddService from "../components/AddService";
import { useEffect, useState } from "react";


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
  }, []);



  return (
    <div className="AddNewService">

      <AddService refreshServices={getAllServices} />

    </div>
  );
}

export default AddNewService;