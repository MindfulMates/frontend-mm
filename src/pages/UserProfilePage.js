import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Row from "react-bootstrap/Row";


function UserProfilePage() {

  const {
    isLoggedIn,
    user,
    logOutUser
  } = useContext(AuthContext);


  return (

    <>
      <div className="titel">
        <h1>Your profile</h1>
      </div>

      <div className="SignupPage Forms">
      <Row xs={1} md={2} className="HomePage-rows1">

        <div className="User">
          <p className="User-title">Username:</p>
          <p className="User-content">{user && user.name}</p>

          <br />

          <p className="User-title">E-Mail:</p>
          <p className="User-content">{user && user.email}</p>

        </div>

        <div>
          <img className="Form-Img" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688584803/Bild3_ftiwnv.png" alt="logo" />
        </div>
      </Row >
      </div>
    </>

  );
}

export default UserProfilePage;