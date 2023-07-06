import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function HomePage() {

  const {
    isLoggedIn,
    user,
    logOutUser
} = useContext(AuthContext);

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

        {!isLoggedIn && (

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
        )}

      </div>

      <footer>
        <Row xs={2} md={4} className="footer-row">
          <p><h5>Socials</h5> 
          <img className="HomePage-Icon4" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688644296/1161953_instagram_icon_ycod5q.png" alt="instagram" />
          <img className="HomePage-Icon4" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688644313/7024783_tiktok_social_media_icon_u3jfgj.png" alt="tiktok" />
          <img className="HomePage-Icon4" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688644380/843786_whatsapp_icon_gik4ao.png" alt="whatsapp" />        
          </p>
          <p><h5>About us</h5> ©️ developed by <br /> Nuno & Carolin </p>
          <p><h5>Get in touch</h5>  
          <img className="HomePage-Icon4" src="https://res.cloudinary.com/dzkmmidp3/image/upload/v1688644296/5282542_linkedin_network_social_network_linkedin_logo_icon_ndkulb.png" alt="linkedin" /> <br/>
             <a className="Home-Link" href="https://www.linkedin.com/in/nunojsmonteiro/">Contact Nuno</a>
              <br/>
              <a className="Home-Link" href="https://www.linkedin.com/in/carolin-klose/">Contact Carolin</a>
          </p>
          <p><h5>Career</h5> join ironhack to learn <br />  how we developed the app <br />  and become a developer</p>
        </Row >
      </footer>

    </>

  );
}

export default HomePage;