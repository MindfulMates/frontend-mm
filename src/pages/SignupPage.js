import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "./../services/auth.service";

import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";


function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);


  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, name };

    authService.signup(requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };



  return (

    <>
      <div className="titel">
        <h1>Join the club...</h1>
      </div>

      <div className="SignupPage Forms">

      <Row xs={1} md={2} className="HomePage-rows1">
          <div>

            <Form className="add-review-form" onSubmit={handleSignupSubmit}>
              <h4>Sign up</h4>

              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleName}
                />
              </Form.Group>

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
                Sign up
              </button>
            </Form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have account?</p>
            <Link to={"/login"}>
              <button className="button-overlay-detail" type="submit">Log in</button>
            </Link>

          </div>

          <div>
            <img className="HomePage-Icon2" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688584803/Bild3_ftiwnv.png" alt="logo" />
          </div>
        </Row >

        </div>
    </>

  )
}

export default SignupPage;