import authService from "../services/auth.service";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

import Row from "react-bootstrap/Row";



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
  }, []);



  return (
    <>
      <div className="ServiceListPage">
        <h4>Let's scroll for some mindful services</h4>
        <Row xs={1} md={4} className="ServiceCardRow">
          {services.map((service) => (
            <ServiceCard key={service._id} {...service} />
          ))}

        </Row>
      </div>

      <footer>
        <Row xs={2} md={4} className="footer-row">
          <p><h5>Contact</h5> Mobile +44 3127898982 mindfulmates@happy.com <br /> Instagram</p>
          <p><h5>About us</h5> values <br /> locations <br /> people</p>
          <p><h5>B2B</h5>  become partner </p>
          <p><h5>Career</h5> developer wanted <br /> easy apply</p>
        </Row >
      </footer>

    </>
  );
}

export default ServiceListPage;