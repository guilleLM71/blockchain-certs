import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import Button from "react-bootstrap/Button";
import Certificar from "./certificar";

/* const PrivateRoute = (props) => {
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
}; */

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
}; */

//Simular Autenticación

class RutaPrivada extends Component {
  render() {
    return (
      <Route exact={this.props.exact} path={this.props.path}>

        {this.props.swcuenta === true ? (
          <div className="row">
            <div
              className="col-md-12 order-md-1"
              style={{ float: "left" }}
            >
              <this.props.component />
            </div>
           
          
          </div>
        ) : (
          <Redirect to="/inicio" />
        )}

       
      </Route>
    );
  }
}

export default RutaPrivada;
/**
 * 
 <div
              className="col-md-8 order-md-2"
              style={{ float: "right", border: "solid", borderColor: "green" }}
            >
            <this.props.component3 />
            </div>

  <div
              className="col-md-12 order-md-3"
              style={{ float: "none", border: "solid", borderColor: "yellow" }}
            >
              <this.props.component2 />
            </div>


 */