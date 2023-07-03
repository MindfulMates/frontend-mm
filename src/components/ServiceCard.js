import { Link } from "react-router-dom";
 
// We are deconstructing props object directly in the parentheses of the function
function ServiceCard ( { title, description, place, date, price, name, email, category, _id } ) {
  
  return (
    <div className="ServiceCard card">
      <Link to={`/services/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{place}</p>
      <p>{price}</p>
      <p>{category}</p>
      <p>Rating add here</p>
    </div>
  );
}
 
export default ServiceCard;

