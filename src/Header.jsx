import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Component/Login";
import Routot from "./Routes";
import Combined from "./Combined";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { logout } = useAuth0();
  const [inpute, setInput] = useState("developer");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <header>
          <h1 className="test"> Gallery Project</h1>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid className="font">
              <Navbar.Brand href="/">Gallery</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <NavDropdown title="More" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#register">
                      Register
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    href="#contact"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Logout
                  </Nav.Link>
                </Nav>

                <Form className="d-flex">
                  <h4 className="developername">{inpute}</h4>
                  <input
                    style={{ display: "none" }}
                    type="text"
                    placeholder="enter  baccha k nam "
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        console.log(setInput(e.target.value));
                      }
                    }}
                  />
                  <Form.Control
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        console.log(setInput(e.target.value));
                      }
                    }}
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    name="searchbarr"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <marquee
            className="markupline"
            width="100%"
            direction="right"
            height="30px"
          >
            This is a gallery for exploring many types of pictures that you can
            implement in your life, like a jumble you can manage. It is suitable
            for living life. Coded by Developer David. If you encounter any
            coding problems, connect with me.
          </marquee>
        </header>
      </BrowserRouter>

      <Routot />

      <Combined
        link={`https://api.pexels.com/v1/search?query=${inpute}&orientation=landscape&per_page=80`}
      />

    </>
  );
};

export default Header;
