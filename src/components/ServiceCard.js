import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import { MdStar } from 'react-icons/md';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ServiceCard({ title, description, place, date, price, name, email, category, imageUrl, _id, review}) {
  const { serviceId } = useParams();




// Calculate average rating
const calculateAverageRating = () => {
  if (review && review.length > 0) {
    let sum = 0;
    review.forEach((elm) => {
      sum += elm.review;
      console.log(sum, 'SUM')
    });
    return sum / review.length;
  }
  return 0;
};

  // Render star icons based on average rating
  const renderStars = () => {
    const averageRating = calculateAverageRating();
    const stars = [];
    for (let i = 0; i < averageRating; i++) {
      stars.push(<MdStar key={i} />);
      console.log('Stars', stars)
    }
    return stars;
  };


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
            <Card.Text>
            <span className="stars-styling">
                  {calculateAverageRating().toFixed(1)} {renderStars()} ({review && <span>{review.length}</span>} Reviews)
                    </span>
            </Card.Text>

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

