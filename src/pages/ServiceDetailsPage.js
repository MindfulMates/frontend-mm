import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import servicesService from "../services/services.service";
import AddReview from "../components/AddReview";
import ReviewCard from "../components/ReviewCard";

import Row from "react-bootstrap/Row";
import { MdStar } from "react-icons/md";



function ServiceDetailsPage(props) {

  const [service, setService] = useState(null);
  const { serviceId } = useParams();

  const navigate = useNavigate()

  const getService = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/api/services/${serviceId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneService = response.data;
        setService(oneService);
      })
      .catch((error) => console.log(error));
  };


  const deleteService = () => {
    const storedToken = localStorage.getItem("authToken");
    servicesService.deleteService(serviceId)
      .then((response) => {
        const oneService = response.data;
        navigate('/services');
      })
      .catch((error) => console.log(error));
  };


  useEffect(() => {
    getService();
  }, []);


  // Calculate average rating
  const calculateAverageRating = () => {
    if (service && service.review.length > 0) {
      let sum = 0;
      service.review.forEach((review) => {
        sum += review.review;
      });
      return sum / service.review.length;
    }
    return 0;
  };

  // Render star icons based on average rating
  const renderStars = () => {
    const averageRating = calculateAverageRating();
    const stars = [];
    for (let i = 0; i < averageRating; i++) {
      stars.push(<MdStar key={i} />);
    }
    return stars;
  };



  return (
    <>
      <div className="titel">
        <h1>Time to calm down...</h1>
      </div>
      <div className="ServiceDetails">

        <Row xs={1} md={2} className="HomePage-rows1">
          <div className="detail-page-infos">

            <div className="detail-page-headline">
              {service && (
                <>
                  <h4>{service.title}</h4>
                  <div>
                    <span className="stars-styling">
                      {calculateAverageRating().toFixed(1)} {renderStars()} ({service && service.review.length} Reviews)
                    </span>
                  </div>
                </>
              )}
            </div>

            {service && (
              <div className="detail-page-inner-text">
                <p>Description:</p>
                <p>{service.description}</p>

                <p>Starting at {service.price} EUR</p>

                <p>Category: {service.category}</p>

                <p>⚑ Location: {service.place}</p>
                <p>🕒 Service hours: {service.date}</p>

                <br />
                <p>Your Mate: {service.name}</p>
                <p>Ask for booking: {service.email}</p>
              </div>
            )}
          </div>

          <div className="detail-page-img">
            {service && (
              <img className="full-width-image" src={service.imageUrl} alt={service.name} />
            )}
          </div>
        </Row >


        <div>
          <Link to={`/services/edit/${serviceId}`}>
            <button className="button-overlay-detail">Edit</button>
          </Link>
          <button onClick={deleteService} className="button-overlay-detail">Delete</button>
          <Link to="/services">
            <button className="button-overlay-detail">Go back</button>
          </Link>
        </div>

        <br />
        <hr />

        <Row xs={1} md={2} className="HomePage-rows1">
          <div>
            <AddReview refreshService={getService} serviceId={serviceId} />
          </div>
          <div>
            {service && service.review.map((review) => (
              <ReviewCard key={review._id} {...review} />
            ))}
          </div>
        </Row >

      </div >
    </>
  );
}

export default ServiceDetailsPage;