import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function ServiceCard({ title, description, place, date, price, name, email, category, imageUrl, _id }) {

  return (
    
    <div>



    <Col className="ServiceCardCol">

      <Card>
        <Card.Img className="ServiceCardImg" variant="top" src={imageUrl} alt="service"/>
        <Card.Body className="ServiceCardBody">
          <Card.Title>{title}</Card.Title>
          <Card.Text>Location: {place}</Card.Text>
          <Card.Text>starting at {price} €</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>Average rate a number ratings!</Card.Text>
          <Link to={`/services/${_id}`}>
          <Button className="ServiceCardButton" variant="primary">Book now!</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>

    </div>
  );
}

export default ServiceCard;

