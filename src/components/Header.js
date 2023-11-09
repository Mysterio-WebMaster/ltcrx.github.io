import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">LTC-RX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#instalacoes">Instalações</Nav.Link>
                        <Nav.Link href="#corpo-tecnico">Corpo técnico</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
