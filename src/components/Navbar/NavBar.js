import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import icon1 from "../../assets/img/linkedin.svg";
import icon2 from "../../assets/img/github.png";
import icon3 from "../../assets/img/insta.svg";
import CustomModal from "../UI/CustomModal";
import EmailForm from "../Contacts/EmailForm";
import "./NavBar.css";

const NavBar = () => {
  const [navLink, setNavLink] = useState("home");
  const [isScroll, setIsScroll] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const modalOpen = () => {
    setModalShow(true);
  }

  const closeModal = () => {
    setModalShow(false);
  }

  return (
    <React.Fragment>
      {modalShow ? <CustomModal title="Contact Me" closeModal={closeModal}><EmailForm></EmailForm></CustomModal> : ""}
    <Navbar expand="lg" variant="dark" className={isScroll ? "navbar-scroll" : ""}>
      <Container>
        <Navbar.Brand href="#home">Ahmad Iqbal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={navLink === "home" ? "navlink-active" : ""}
              onClick={() => setNavLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={navLink === "skills" ? "navlink-active" : ""}
              onClick={() => setNavLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={navLink === "projects" ? "navlink-active" : ""}
              onClick={() => setNavLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-social">
            <a href="https://linkedin.com/in/ahmadiqball">
              <img src={icon1} alt="lkdn-icon" />
            </a>
            <a href="https://github.com/ahmadiqball">
              <img className="img-github" src={icon2} alt="github-icon" />
            </a>
            <a href="https://instagram.com/ahmiqball">
              <img src={icon3} alt="ig-icon" />
            </a>
          </span>
          <button className="navbar-contact" onClick={modalOpen}>Contact Me</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
