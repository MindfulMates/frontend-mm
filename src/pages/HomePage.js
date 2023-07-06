import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <>

      <div className="HomePage">

        <Row xs={1} md={2} className="HomePage-rows1">
          <div className="HomePage-start-text">
            <h1>Discover mind-settling services that calms you doooo...own</h1>
            <h4>right around your corner</h4> <br />
            <Link to="/services">
            <button className="button-overlay-home">Explore!</button>
            </Link>
          </div>
          <img className="HomePage-Icon1" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688586472/Bild5_u6vio6.png" alt="logo" />
        </Row >

        <Row xs={1} md={2} className="HomePage-rows2">
          <img className="HomePage-Icon2" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688584803/Bild3_ftiwnv.png" alt="logo" />
          <h5>life was never smoother before...</h5>
        </Row>

        <Row xs={1} md={2} className="HomePage-rows2">
          <div>
            <h2>Reduce your stress level quickly or don’t get stressed anyways</h2>
            <h5>by getting help nearby from neighbor to neighbor and explore a nice community around</h5> <br />
            <Link to="/signup">
            <button className="button-overlay-home">Sign up!</button>
            </Link>
          </div>
          <div>
            <img className="HomePage-Icon3" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688589650/people_kofrrt.png" alt="logo" />
          </div>
        </Row>

      </div>

      <footer>
        <Row xs={2} md={4} className="footer-row">
          <p><h5>Contact</h5> Mobile +44 3127898982 mindfulmates@happy.com <br /> Instagram</p>
          <p><h5>About us</h5> values <br /> locations <br /> people</p>
          <p><h5>B2B</h5>  become partner </p>
          <p><h5>Career</h5> developer wanted <br /> easy apply</p>
        </Row >
      </footer>

    </>

  );
}

export default HomePage;