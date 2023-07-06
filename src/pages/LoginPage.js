import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import authService from "./../services/auth.service";
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  /*  UPDATE - get authenticateUser from the context */
  const { storeToken, authenticateUser } = useContext(AuthContext);


  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };


    authService.login(requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };


  return (
    <>
      <div className="titel">
        <h1>Happy to see you again...</h1>
      </div>

      <div className="LoginPage Forms">

        <Row xs={1} md={2} className="HomePage-rows1">
          <div>

            <Form className="add-review-form" onSubmit={handleLoginSubmit}>
              <h4>Log in</h4>

              <Form.Group className="mb-3">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                />
              </Form.Group>

              <button className="button-overlay-review" type="submit">
                Log In
              </button>
            </Form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Don't have an account yet?</p>
            <Link to={"/signup"}>
              <button className="button-overlay-detail" type="submit">Sign Up</button>
            </Link>

          </div>

          <div>
            <img className="Form-Img" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688584803/Bild3_ftiwnv.png" alt="logo" />
          </div>
        </Row >

      </div>
    </>
  )
}

export default LoginPage;