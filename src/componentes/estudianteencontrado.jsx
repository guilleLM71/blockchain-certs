import React, { Component } from "react";
import { Table } from "react-bootstrap";

class EstudianteEncontrado extends Component {
 // state = { name: "", sender: "", course: "" };


  /*

0:uint256: id 0
1:string: institucion
2:address: emisor 0x00000
3:string: tituloProfesional
4:string: titulocurso
5:uint256: ci 0
6:string: nombre
7:string: appaterno
8:string: apmaterno
9:uint256: createdAt 0
  */

  render() {
    return (
      <div
        className="container "
        style={{
          fontFamily: "Montserrat",
          background: "#C2D2E9",
          fontWeight: "bold",
          border: "4px solid black",
          fontSize: "15px",
          marginTop: "10px",
          color:"black"
          
        }}
      >

        <div style={{ borderBottom: " 1px solid black" }}>
          <h5>Estudiante</h5>
        </div>

        <Table>

        <thead>
                
                  <th>CI</th>
                  <th>NOMBRE</th>
                  <th>GRADO ACADEMICO</th>
                
              </thead>
              <tbody>

              <tr key={this.props.estudiante.ci}>
                      <td>{this.props.estudiante.ci}</td>
                      <td>{this.props.estudiante.nombre}</td>
                      <td>{this.props.estudiante.gradoacademico}</td>
                    </tr>
       
    
        </tbody>
        </Table>      
      </div>
    );
  }
}

export default EstudianteEncontrado;
