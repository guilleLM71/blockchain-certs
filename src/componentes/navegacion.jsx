import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../nav.css";
class Navegacion extends Component {
  state = {};

  conectar = (event) => {
    event.preventDefault();
    this.props.login();
    //console.log(this);
  
  };


  render() {
    return (
      <Navbar className="bar" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand mb={0} href="#home">
          CertiContrato
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item className="mt-2 mr-2 ">
              <Link to="/inicio">Inicio</Link>
            </Nav.Item>

            {this.props.swcuenta?    <Nav.Item className="mt-2 mr-2 ">
              <Link to="/certificar">Certificar</Link>
            </Nav.Item>
            : null}

       
         

            {this.props.swcuentaadmin? <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/registro">Registro</Link>
            </Nav.Item>
            : null}
            
            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/verificar">Verifica</Link>
            </Nav.Item>

            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/contacto">Contacto</Link>
            </Nav.Item>

            <Nav.Item className="mt-2 ml-2 mr-3">
              <Link to="/informacion">Informacion</Link>
            </Nav.Item>
            
          </Nav>
          <Navbar.Brand mb={5} href="#home">
            Wallet: { this.props.cuenta
          }
          </Navbar.Brand>
          <Navbar.Brand mb={5}>
          
            <Button
                // disabled={!isEnabled}
                className="mt-3"
                variant="primary"
                type="submit"
                //onClick={this.conectar}
              >
                Conectar Wallet
              </Button>
           
          </Navbar.Brand>
        </Navbar.Collapse>


        
        
          
      </Navbar>
    );
  }
}

export default Navegacion;


/**
 * 
 <Nav.Item className="mt-2 mr-3">
              <Link to="/ver">Ver Certificado</Link>
            </Nav.Item>
             */