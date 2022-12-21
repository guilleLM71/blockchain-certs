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

class RutaPrivadaAdmin extends Component {
  render() {
    return (
      <Route exact={this.props.exact} path={this.props.path}>

        {this.props.swcuentaadmin === true ? (
          <>
            <this.props.component />
          </>
        ) : (
          <Redirect to="/inicio" />
        )}




       
      </Route>
    );
  }
}

export default RutaPrivadaAdmin;
