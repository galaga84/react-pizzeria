import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const formatCurrency = (amount) => {
  return amount.toLocaleString("es-CL");
};

const NavbarComponent = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand>
        <Nav className="w-100 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3">
            <Button variant="outline-primary" as={Link} to="/">🍕 Home</Button>
            {token ? (
              <>
                <Button variant="outline-primary">🔓 Profile</Button>
                <Button variant="outline-danger">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-primary" as={Link} to="/login">🔐 Login</Button>
                <Button variant="outline-primary" as={Link} to="/register">🔐 Register</Button>
              </>
            )}
          </div>

          <Button variant="outline-success">
            🛒 Total: ${formatCurrency(total)}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;


