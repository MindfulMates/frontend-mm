import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


function Navbar() {
    const {
        isLoggedIn,
        user,
        logOutUser
    } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="/services">
                <button>Services</button>
            </Link>

            <Link to="/service">
                <button>Add Service</button>
            </Link>


            {isLoggedIn && (
                <>
                    <button onClick={logOutUser}>Logout</button>

                    <Link to="/UserProfilePage">
                        <button>Profile</button>
                    </Link>

                    <span>Hi {user && user.name}😀</span>

                </>
            )}

            {!isLoggedIn && (
                <>
                    <Link to="/signup"> <button>Sign Up</button> </Link>
                    <Link to="/login"> <button>Login</button> </Link>
                </>
            )}

        </nav>
    );
}

export default Navbar;
