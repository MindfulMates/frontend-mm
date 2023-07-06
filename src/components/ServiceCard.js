import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";


function ServiceCard({ title, description, place, date, price, name, email, category, imageUrl, _id }) {

  return (

    <div>

      <Col className="ServiceCardCol">

        <Card>
        <div className="button-overlay-container">
        <button className="button-overlay-category">{category}</button>
        </div>

          <Card.Img className="ServiceCardImg" variant="top" src={imageUrl} alt="service" />

          <Card.Body className="ServiceCardBody">
            <Card.Title>{title}</Card.Title>
              <br/>
            <Card.Text className="ServiceCArd-price">starting at {price}€</Card.Text>
            <Card.Text className="ServiceCArd-location">⚑ {place}</Card.Text>
            <Card.Text>★ ADD Average rate + number!</Card.Text>

            <Link to={`/services/${_id}`}>
              <button className="button-overlay-card">Book now!</button>
            </Link>

          </Card.Body>
        </Card>
      </Col>

    </div>
  );
}

export default ServiceCard;

