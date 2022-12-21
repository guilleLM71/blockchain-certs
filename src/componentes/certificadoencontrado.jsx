import React, { Component } from "react";
import PDF from 'react-pdf-js';
import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  View,
  Page,
} from "@react-pdf/renderer";


class CertificadoEncontrado extends Component {
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
          fontSize: "20px",
          marginTop: "10px",
        }}

        
      >
        <div style={{ borderBottom: " 1px solid black" }}>
          <h4>Certificado</h4>
        </div>

         <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          URL:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.datos[7]}
          </span>
          <embed src={this.props.datos[7]} width="500px" height="400px"></embed>
        </div>
        
        <div style={{ borderBottom: " 1px solid black" }}>
          <h4>Datos del Certificado</h4>
        </div>
        <div>
          ID:
          <span
            style={{ marginLeft: "10px", borderBottom: " 2px solid black" }}
          >
            {this.props.datos[0]}
          </span>
        </div>
        <div>
          Institucion emisor:
          <span
            style={{ marginLeft: "10px", borderBottom: " 2px solid black" }}
          >
            {this.props.datos[1]}
          </span>
        </div>
        <div>
          Direccion del Emisor:
          <span
            style={{ marginLeft: "10px", borderBottom: " 2px solid black" }}
          >
            {this.props.datos[2]}
          </span>
        </div>

        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          Grado Academico:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.datos[3]}
          </span>
        </div>

        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          CI:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.datos[4]}
          </span>
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          Nombre:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.datos[5]}
          </span>
        </div>

        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          Fecha de Creacion:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.datos[6]}
          </span>
        </div>

        

      
       
         
      
      </div>
    );
  }
}

export default CertificadoEncontrado;
