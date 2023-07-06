import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


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

      <div className="User">
        <p className="User-title">Username:</p>
        <p className="User-content">{user && user.name}</p>

        <br />

        <p className="User-title">E-Mail:</p>
        <p className="User-content">{user && user.email}</p>

        <br />

      </div>
    </>

  );
}

export default UserProfilePage;