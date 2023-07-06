import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import { MdStar } from 'react-icons/md';

function ReviewCard({ review, description, friendly }) {


// Render star rating
const renderStarRating = () => {
  const stars = [];
  for (let i = 0; i < review; i++) {
    stars.push(<MdStar key={i} />);
  }
  return stars;
};



    return (

      <Col>

      <Card className="ReviewCardBody">
        <Card.Body>
          <h5><Card.Title>{review} {renderStarRating()}</Card.Title></h5>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Friendly-Mate?: {friendly.toString()}</Card.Text>
        </Card.Body>
      </Card>

      </Col>
    );
  }
  
  export default ReviewCard;
  