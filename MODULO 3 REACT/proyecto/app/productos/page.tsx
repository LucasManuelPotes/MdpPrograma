"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const productos = () => {
    return (
        <>
            <div className="p-8 ">
            <h1 className="text-4x1 py-4">Productos</h1>
            <div className="container">
    <div className="row">
        <div className="col-md-12 col-sm-12">
            <p className="subtitle">Figuras de Demon Slayer</p>
        </div>
        
    </div>
    <div className="row">
        <div className="col-md-4 col-sm-12 producto">
            <a href="#" target="_blank" ><img className="img img-centered py-4" src="assets/demon1.jpg" alt="Argentina"></img></a>
        </div>
        <div className="col-md-4 col-sm-12 producto">
            <a href="#" target="_blank" ><img className="img img-centered py-4" src="assets/demon2.jpg" alt="Francia"></img></a>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 col-sm-12 producto">
            <a href="#" target="_blank" ><img className="img img-centered py-4" src="assets/demon3.jpg " alt="Estados Unidos"></img></a>
        </div>
    </div>
    </div>
    </div>

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
};
   
    
    export default productos;