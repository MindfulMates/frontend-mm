import authService from "../services/auth.service";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


function ReviewList() {

  const [reviews, setReviews] = useState([]);

  const getAllReviews = () => {
    authService.api
      .get(`${process.env.REACT_APP_SERVER_URL}/api/reviews`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  console.log(reviews)

  return (
    <div className="ReviewList">

      <h3>Other mates rated the service:</h3>

      {reviews.map((review) => (
        <ReviewCard key={review._id} {...review} />
      ))}

    </div>
  );
}

export default ReviewList;