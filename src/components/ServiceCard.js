import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// We are deconstructing props object directly in the parentheses of the function
function ServiceCard({ title, description, place, date, price, name, email, category, _id }) {

  return (
    <div className="ServiceCard card">

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{place}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>Number of rating here!</Card.Text>
          <Button variant="primary" to={`/services/${_id}`}>check details</Button>
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

