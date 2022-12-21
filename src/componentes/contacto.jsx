import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class Contacto extends Component {
  sendmail = event => {
    event.preventDefault();
    window.location.href = `mailto:${this.state.email}`;
  };

  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  state = {
    email: "guillermolaura333@gmail.com",
 

  };
  render() {
    return (

        


      <div style={{
        //backgroundImage: `url(${b1})`,
        background: "#0A192F",
        color: "#fff",
        backgroundSize: "cover",
        //border: "3px solid white",
        height: "100%",
        width: "100%"
      }}
      className="container-fluid ">
        <h3>Envie los datos de la institucion para su registro:</h3>
        <div className="w-50 container  "  style={{
        //backgroundImage: `url(${b1})`,
        background: "#0A192F",
        color: "#fff",
        backgroundSize: "cover",
       // border: "1px solid black",
        height: "100%",
        width: "100%"
      }}>
          <ul className="list-group">
            <li className="list-group-item">Direccion de Ethereum wallet </li>
            <li className="list-group-item">Nombre de la Institucion</li>
          </ul>

          <Form onSubmit={this.sendmail}>
            <Button variant="primary" type="submit">
             Enviar
            </Button>
          </Form>
         
          

          
        </div>


      
        
      </div>
    );
  }
}

export default Contacto;
