import authService from "../services/auth.service";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

import Row from "react-bootstrap/Row";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ServiceListPage() {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("");


  const getAllServices = () => {
    authService.api
      .get(`${process.env.REACT_APP_SERVER_URL}/api/services`)
      .then((response) => {
        const filterCategory = response.data.filter(element =>  {
          return element.category.toLowerCase().includes(category.toLowerCase())
        })
        setServices(filterCategory)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllServices();
  }, [category]);

  

  return (
    <>
      <div className="ServiceListPage">
        <h4>Let's scroll for some mindful services</h4>

        <Form className="d-flex">
            <Form.Control
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              type="text"
            value={category}
            onChange={e => setCategory(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>


        <Row xs={1} md={4} className="ServiceCardRow">
          {services.map((service) => (
           <ServiceCard key={service._id} {...service} />
          ))}

        </Row>
      </div>

      <footer>
        <Row xs={2} md={4} className="footer-row">
          <p><h5>Socials</h5> 
          <img className="HomePage-Icon4" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688644296/1161953_instagram_icon_ycod5q.png" alt="instagram" />
          <img className="HomePage-Icon4" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688644313/7024783_tiktok_social_media_icon_u3jfgj.png" alt="tiktok" />
          <img className="HomePage-Icon4" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688644380/843786_whatsapp_icon_gik4ao.png" alt="whatsapp" />        
          </p>
          <p><h5>About us</h5> ©️ developed by <br /> Nuno & Carolin </p>
          <p><h5>Get in touch</h5>  
          <img className="HomePage-Icon4" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688644296/5282542_linkedin_network_social_network_linkedin_logo_icon_ndkulb.png" alt="linkedin" /> <br/>
             <a className="Home-Link" href="https://www.linkedin.com/in/nunojsmonteiro/">Contact Nuno</a>
              <br/>
              <a className="Home-Link" href="https://www.linkedin.com/in/carolin-klose/">Contact Carolin</a>
          </p>
          <p><h5>Career</h5> join ironhack to learn <br />  how we developed the app <br />  and become a developer</p>
        </Row >
      </footer>

    </>
  );
}

export default ServiceListPage;