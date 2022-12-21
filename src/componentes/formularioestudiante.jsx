import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../b3.jpg";

import certcontract from "../config.js";
import web3 from "../web3";
import EstudianteEncontrado from "./estudianteencontrado";

class FormularioEstudiante extends Component {
  /*
  canBeSubmitted() {
    const { tituloProf,tituloCurso,ci,nombre,paterno,materno } = this.state;
    return (
      tituloProf.length > 0 &&
      tituloCurso.length > 0 &&
      ci.length > 0 &&
      nombre.length > 0 &&
      paterno.length > 0 &&
      materno.length > 0 
     
    );
  }*/

 

  handleChange = async (event) => {
   
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  buscaEstudiante = () => {
   
    const ci = this.state.ci;
    console.log(ci)
     
    this.props.estudiantes.map(estudiante => {

      

        if (estudiante.ci == ci) {
          this.setState({ estudiante: estudiante });
          this.setState({ sw: true });
  
          this.someMethod(
            estudiante.ci,
            estudiante.nombre,
            estudiante.gradoacademico,
            
          );
         
        } 
       
      })
  
  };

  state = {
    ci: "",
    nombre: "",
    gradoacademico:"",
    estudiante: [],
    sw: false,
  };

  someMethod = (p1, p2, p3) => {
    this.props.handlerpadre(p1, p2, p3);
  };

  render() {
    //const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          height: "100vh%",
          //backgroundImage: `url(${b1})`,

          backgroundSize: "cover",
        }}
      >
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              name="ci"
              value={this.state.ci}
              onChange={(e) => {
                
                this.handleChange(e);
                this.buscaEstudiante(e);
               
               
              }}
              placeholder="CI"
            />
          </Form.Group>
        </Form>
        {this.state.sw ? (
          <EstudianteEncontrado estudiante={this.state.estudiante} />
        ) : null}
      </div>
    );
  }
}

export default FormularioEstudiante;

/*

    <Form.Group>
              <Form.Control
                type="text"
                name="nombre"
                value={this.state.estudiante[1]}
               // onChange={this.handleChange}
                placeholder="Nombre"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="paterno"
                value={this.state.estudiante[2]}
               // onChange={this.handleChange}
                placeholder="Ap-Paterno"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="materno"
                value={this.state.estudiante[3]}
                //onChange={this.handleChange}
                placeholder="Ap-Materno"
              />
            </Form.Group>


*/
