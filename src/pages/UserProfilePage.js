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

      <div className="Forms">
        <span>Username: {user && user.name}</span>
        <br />

        <span>E-Mail: {user && user.email}</span>
        <br />

      </div>
    </>

  );
}

export default UserProfilePage;