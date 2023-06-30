import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


function UserProfilePage() {

    const {
        isLoggedIn,
        user,
        logOutUser
    } = useContext(AuthContext);

    return (
      <div>
        <h1>Your Profile!</h1>
        <span>{user && user.name}</span>
        <br/>
    
        <span>{user && user.email}</span>
        <br/>

        <span>{user && user.password}</span>


      </div>
    );
  }
   
  export default UserProfilePage;