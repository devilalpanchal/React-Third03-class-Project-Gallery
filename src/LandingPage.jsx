import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import gif from "./assets/gif.mp4";
import MainImage from "./assets/MainImage.jpg";
import { useAuth0 } from "@auth0/auth0-react";
const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="navbarmain">
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home">Gallery</Navbar.Brand>
            <Nav className="me-auto nav">
              <Nav.Link className="mainnavlink" href="#home" onClick={() => alert('First Login')}>
                Home
              </Nav.Link>
              <Nav.Link className="mainnavlink" href="#features" onClick={() => alert('First Login')}>
                Features
              </Nav.Link>
              <Nav.Link className="mainnavlink" href="#pricing" onClick={() => alert('First Login')}>
                Pricing
              </Nav.Link>
              <Nav.Link  onClick={() => loginWithRedirect()}  className="mainnavlink" href="#login">
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className="paragrafh">
        <p>
          Welcome to our digital gallery, where every image tells a story. From
          breathtaking landscapes to intimate portraits, we celebrate
          photography's diverse art forms. Lose yourself in macro details or
          immerse in nature's grandeur. Each click captures a moment forever,
          inviting you to see the world anew. Join us in this visual journey! Or
          immerse yourself in the grandeur of nature, as majestic mountains and
          serene seascapes transport you to distant lands. Every click of the
          shutter is a moment captured forever, a window into the soul of the
          photographer and the world they inhabit..
        </p>
      </div>
      <div>
        <video
          className="imageGiff"
          src={gif}
          width="550"
          height="200"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div>
        <button   onClick={() => loginWithRedirect()} className="loginBtn">Login</button>
      </div>
      <div>
        <p className="loginBtn02">#Coded by Developer Devid</p>
      </div>
      <div>
        <img className="bacgroundImage" src={MainImage} />
      </div>
    </>
  );
};

export default LandingPage;
