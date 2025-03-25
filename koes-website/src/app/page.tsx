"use client"
import React, { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand href="/" className="fw-bold text-primary">Your Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Navigate" id="basic-nav-dropdown" menuVariant="dark">
                <Link href="/" passHref>
                  <NavDropdown.Item>Home</NavDropdown.Item>
                </Link>
                <Link href="/about" passHref>
                  <NavDropdown.Item>About</NavDropdown.Item>
                </Link>
                <Link href="/projects" passHref>
                  <NavDropdown.Item>Projects</NavDropdown.Item>
                </Link>
                <Link href="/skills" passHref>
                  <NavDropdown.Item>Skills</NavDropdown.Item>
                </Link>
                <Link href="/contact" passHref>
                  <NavDropdown.Item>Contact</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content - Scrollable */}
      <Container fluid className="flex-grow-1 overflow-auto bg-dark text-light">
        <div className="row min-vh-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="display-3 fw-bold text-primary mb-4">Welcome to My Portfolio</h1>
            <p className="lead text-muted mb-5">
              Software Engineer | Full Stack Developer
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/projects" passHref>
                <Button variant="primary" size="lg">
                  View Projects
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button variant="outline-primary" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Optional Sections - Make page scrollable */}
        <div className="row py-5">
          <div className="col-12">
            <h2 className="text-center mb-4 text-primary">Featured Highlights</h2>
            
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 bg-secondary text-light border-0">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Web Development</h5>
                    <p className="card-text">
                      Specialized in modern web technologies including Next.js, React, and TypeScript.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 bg-secondary text-light border-0">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Full Stack Solutions</h5>
                    <p className="card-text">
                      Creating end-to-end applications with robust backend and responsive frontend.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 bg-secondary text-light border-0">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Innovative Thinking</h5>
                    <p className="card-text">
                      Solving complex problems with creative and efficient software solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-dark py-3 text-center">
        <Container>
          <p className="text-muted mb-0">© 2024 Your Name. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}