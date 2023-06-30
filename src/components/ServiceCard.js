import { Link } from "react-router-dom";
 
// We are deconstructing props object directly in the parentheses of the function
function ServiceCard ( { title, description, place, date, price, name, email, _id } ) {
  
  return (
    <div className="ServiceCard card">
      <Link to={`/services/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{description} </p>
      <p>{place}</p>
      <p>{date}</p>
      <p>{price}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}
 
export default ServiceCard;

