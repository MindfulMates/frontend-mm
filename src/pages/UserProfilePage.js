import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

// import { Link } from "react-router-dom";



function UserProfilePage() {

  const {
    isLoggedIn,
    user,
    logOutUser
  } = useContext(AuthContext);

  // get.findUserbyId()

  return (

    <>

      <div className="titel">
        <h1>Your profile</h1>
      </div>

      <div className="Forms">
        <span>Username: {user && user.name}</span>
        <br />

        <span>E-Mail: {user && user.email}</span>
        <br />

      </div>

      {/* <Link to={/profilepage/edit/}>
                  <button className="button-overlay-edit">Edit</button>
                </Link> */}

    </>

  );
}

export default UserProfilePage;