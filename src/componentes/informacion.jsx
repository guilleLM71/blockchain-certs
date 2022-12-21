import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class Informacion extends Component {
  sendmail = event => {
    event.preventDefault();
    window.location.href = `mailto:${this.state.email}`;
  };

  agregarinstituto = (event) => {
    event.preventDefault();
    this.props.agregarinstituto(this.state);
    
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  state = {
    email: "guillermolaura333@gmail.com",
    nombre:"",
    adress:""

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
        <h3>Informacion sobre la Pagina</h3>
        <div className="w-50 container  "  style={{
        //backgroundImage: `url(${b1})`,
        background: "#0A192F",
        color: "#fff",
        backgroundSize: "cover",
       // border: "1px solid black",
        height: "100%",
        width: "100%"
      }}>
         
       
         
          

          
        </div>


       
      </div>
    );
  }
}

export default Informacion;
