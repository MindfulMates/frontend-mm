import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function ReviewCard({ review, description, friendly }) {
    return (


      <Col>

      <Card className="ReviewCardBody">
        <Card.Body>
          <h5><Card.Title>{review} Stars</Card.Title></h5>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Friendly-Mate?: {friendly.toString()}</Card.Text>
        </Card.Body>
      </Card>

      </Col>
    );
  }
  
  export default ReviewCard;
  