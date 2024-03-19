import { Link } from "react-router-dom";
import image from "../images/1.png";
import "../styles/layouts/landing.scss";
import "../styles/core/reset.scss";

function Landing() {
  return (
    <>
      <header className="header"></header>

      <main className="landingMain">
        <img src={image} alt="" className="landingImg" />

        <div className="links">
          <Link to="/api/fivelist" className="landingLinkFive">
            <h1 className="titleLanding">Five List</h1>
          </Link>

          <Link to="api/otherslist" className="landingLinkOthers">
            <h1 className="titleLanding">All the Characters</h1>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Landing;
