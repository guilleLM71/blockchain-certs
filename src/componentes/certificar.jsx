import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import "../certstyle.css";
import Draggable from "react-draggable";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { PDFDownloadLink, PDFdiver } from "@react-pdf/renderer";

class Certificar extends Component {
  state = {};

  styles = StyleSheet.create({
    page: { backgroundColor: "tomato" },
    section: { color: "white", pAlign: "center", margin: 30 },
  });

  render() {
    return (
      
       
          <Fragment>
           
              <Image
              
              src={this.props.imagen}
              style={{ width: "792px", height: "612px" }}

             
              ></Image>
                <img
              
              src={this.props.imagen}
              style={{ width: "792px", height: "612px" }}

             
              ></img>

              <Draggable>
                <div
                  id="institucion"
                  style={{
                    position: "absolute",
                    top: "25px",
                    left: "380px",
                    fontSize:"30px",
                    alignContent:"center"
                  }}
                >
                  <Text>{"INSTITUCION: "+ this.props.emisor}</Text>
                </div>
              </Draggable>

              <div id="lblcertificado"
                  style={{
                    position: "absolute",
                   
                    

                    top: "90px",
                    left: "380px",
                    fontSize:"40px"
                  }}
                    >
                  <Text>{"CERTIFICADO"} </Text>
                </div>

              <Draggable>
                <div id="grado"
                  style={{
                    position: "absolute",
                   
                    

                    top: "200px",
                    left: "380px",
                    fontSize:"30px"
                  }}
                    >
                  <Text>{"CURSO "+this.props.tituloCurso} </Text>
                </div>
              </Draggable>
            
              <Draggable>
                <div id="nombrecompleto"
                style={{
                    position: "absolute",
                    top: " 250px",
                    left: "100px",
                    
                  }}>
                   <Text>{"CONFIERE EL PRESENTE CERTIFICADO AL ESTUDIANTE  : "}</Text>
                  <Text style={{
                    
                    fontSize:"20px"
                  }}
                  >{this.props.nombre +" "+ this.props.paterno+" "+this.props.materno}</Text>
                </div>
              </Draggable>

              <Draggable>
                <div id="ci"
                style={{
                  position: "absolute",
                  top: "280px",
                  left: "100px",
                  fontSize:"20px"
                }}
                >
                  <Text>{"CON CI: "+ this.props.ci}</Text>
                </div>
              </Draggable>
              
              <Draggable>
                <div
                  id="id"
                  style={{
                    position: "absolute",
                    top: "340px",
                    left: "60px",
                    fontSize:"20px"
                  }}>
                
                  <Text>
                    {
                      
                      "ID: " +this.props.id
                    }
                  </Text>
                </div>
              </Draggable>

              <Draggable>
                <div id="txh"
                style={{
                  position: "absolute",
                  top: "370px",
                  left: "60px",
                  fontSize:"20px"
                }}
                
                
                >
                  <Text>{"TXH: " +this.props.txh}</Text>
                </div>
              </Draggable>

              <Draggable>
                <div
                  id="institucion"
                  style={{
                    position: "absolute",
                    top: "400px",
                    left: "60px",
                    fontSize:"20px"
                  }}
                  
                >
                  <Text>{"EMISOR: "+this.props.emisor}</Text>
                </div>
              </Draggable>

              <Draggable>
                <div id="direccionemisor"
                
                style={{
                  position: "absolute",
                  top: "430px",
                  left: "60px",
                  fontSize:"20px"
                }}
                >
                  <Text>{"DIRECCION DEL EMISOR: " +this.props.direccionemisor}</Text>
                </div>
              </Draggable>
              
              <Draggable >
                <div id="fechaemision"
                
                style={{
                  position: "absolute",
                  top: "460px",
                  left: "60px",
                  fontSize:"20px"
                }}
                
                >
                  <Text>
                    {this.props.fechaemision !== undefined
                      ? "FECHA DE EMISION: " +
                        
                          this.props.fechaemision 
                      : null}
                  </Text>
                </div>
              </Draggable>
            
          </Fragment>
       
    
    );
  }
}

export default Certificar;

/*

 <Button
          className="btn"
          onClick={this.onclickprint}
          variant="success"
          type="submit"
        >
          Print
        </Button>


*/
