import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { CartContext } from '../context/CartContext'; 
import { UserContext } from "../context/UserContext"; // Importa UserContext

const formatCurrency = (amount) => {
  return amount.toLocaleString("es-CL");
};

const NavbarComponent = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // Accede al token y al método logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Llama al método logout
    navigate("/login"); // Redirige al usuario a la página de login después de cerrar sesión
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand>
        <Nav className="w-100 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3">
            <Button variant="outline-primary" as={Link} to="/">🍕 Home</Button>
            {token ? (
              <>
                <Button variant="outline-primary" as={Link} to="/profile">🔓 Profile</Button>
                <Button variant="outline-danger" onClick={handleLogout}>🔒 Logout</Button> {/* Llama al método handleLogout */}
              </>
            ) : (
              <>
                <Button variant="outline-primary" as={Link} to="/login">🔐 Login</Button>
                <Button variant="outline-primary" as={Link} to="/register">🔐 Register</Button>
              </>
            )}
          </div>

          <Button variant="outline-success" as={Link} to="/cart">
            🛒 Total: ${formatCurrency(totalPrice)} {/* Muestra el total del carrito */}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;












