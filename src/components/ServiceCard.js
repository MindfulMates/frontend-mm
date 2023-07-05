import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// We are deconstructing props object directly in the parentheses of the function
function ServiceCard({ title, description, place, date, price, name, email, category, imageUrl, _id }) {

  return (
    <div className="ServiceCard">

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <img src={imageUrl} alt="service" width="200" />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{place}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>Number of rating here!</Card.Text>
          <Link to={`/services/${_id}`}>
          <Button variant="primary">check details</Button>
          </Link>
        </Card.Body>
      </Card>

      {/* <Link to={`/services/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{place}</p>
      <p>{price}</p>
      <p>{category}</p>
      <p>Rating add here</p> */}

    </div>
  );
}

export default ServiceCard;

