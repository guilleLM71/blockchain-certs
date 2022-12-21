import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Imagenes from "./imagenes";
import VerCertificado from "./vercertificado";

class GenerarPDF extends Component {
  render() {
    return (
      
      //<this.props.component2/>
      <div>
        {this.props.swpdf ? (
          <PDFViewer
            className="col-md-12"
            style={{ width: "90%", height: "90%" }}
          >
            {<this.props.component />}
          </PDFViewer>
        ) : (
          <h1>Aqui va tu PDF .... Deber generarlo</h1>
        )}
{ console.log( <PDFViewer/>)}
     
      </div>
    );
  }
}

export default GenerarPDF;

/**
   * 
   * 
   * 
   

   <PDFViewer className="col-md-8"
          style={{ float:"right", width: "100%", height: "80vh" ,border:"solid"}}>

                {    <this.props.component />}

          </PDFViewer>



           <PDFDownloadLink
            document={<this.props.component />}
            fileName="certi.pdf"
          >
            {" "}
            <Button variant="info">Descargar PDF</Button>
          </PDFDownloadLink>
   */
