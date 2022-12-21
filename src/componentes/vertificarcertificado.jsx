import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../b3.jpg";
import CertificadoEncontrado from "./certificadoencontrado";
//import { PDFJS } from "react-pdf";
import sha256 from "crypto-js/sha256";
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, ToastBody, ToastHeader } from "reactstrap"
  
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";


class VertificarCertificado extends Component {
  canBeSubmittedid() {
    const id = this.state.id;
    return id.length > 0;
  }
  canBeSubmittedtxh() {
    const txh = this.state.txh;
    return txh.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  verificarcertificado = event => {
    event.preventDefault();
    this.props.verificarcertificado(this.state);
    //console.log(this);
  };


  verificarcertificadohashdoc = event => {
    event.preventDefault();
    this.props.verificarcertificadohashdoc(this.state);
    //console.log(this);
  };

  gettransaction = event => {
    event.preventDefault();
    const url = "https://etherscan.io/tx/" + this.state.txh;
    window.open(url);
    console.log(url);
  };



 
  onFileChangeDoc = (e) => {
    console.log("on-file-change");
    var file = e.target.files[0];
    var pattern = /pdf-*/;
    const reader = new window.FileReader();
    console.log(file.name);
    reader.readAsDataURL(file);
    if (!file.type.match(pattern)) {
      alert("Formato inválido");
      return;
    }
    console.log(this);
    this.setState({ loadedpdf: false });

    reader.onload = (e) => {
      this.setState({
        imageSrcpdf:reader.result,
        loadedpdf: true,
        imageNamepdf: file.name,
      });

      const hash = sha256(reader.result);
      const hashingdoc = hash.toString();

      this.setState({
        hashdoc: hashingdoc,
      });

      console.log(this.state.imageSrcpdf);
      console.log(hashingdoc);
      //this.someMethodapp(reader.result);
    };

    //this.someMethodapp(this.state.imageSrc);

   
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  state = {
    id: "",
    txh: "",
    hashdoc:"",
    abierto:false
  };
  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      maxWidth: "100%",
      transform: "translate(-50%, -50%)",
    };
    const isEnabledid = this.canBeSubmittedid();
    const isEnabledtxh = this.canBeSubmittedtxh();
    return (
      <div
        style={{
          //backgroundImage: `url(${b1})`,
          background: "#0A192F",
          color: "#fff",
          backgroundSize: "cover",
          border: "1px solid black",
          height: "100%",
          width: "100%"
        }}
        className="container-fluid "
      >
        <div className=" mx-auto w-50 mb-4 ">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className=" mt-3 mb-4"
          >
            Verifica tu Certificado por ID
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.verificarcertificado}
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
                placeholder="Ingresa el ID de tu Certificado"
              />
            </Form.Group>
            <Button
              disabled={!isEnabledid}
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
              onClick={this.abrirModal}
            >
              Verificar
            </Button>
          </Form>
          {this.props.encontrado ? 
          <>
            <Modal isOpen={this.state.abierto} style={modalStyles}>
              <ModalHeader> </ModalHeader>
              <ModalBody>
                <CertificadoEncontrado datos={this.props.datos} />
              </ModalBody>

              <ModalFooter>
               
              <Button color="secondary" onClick={this.abrirModal}>
                  Cerrar
                </Button>
               
              </ModalFooter>
            </Modal>
         
        
         </>   :null       
                  
        }

          <hr
            className="mt-5 "
            style={{ color: "red", backgroundColor: "red", height: 5 }}
          />
        </div>




        <div className=" mx-auto w-50 mb-3">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className="mt-5 mb-4"
          >
            Sube tu certificado para Verificar

          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.verificarcertificadohashdoc}
            style={{
              marginBottom: "57px",
              background: "rgba(255,255,255,0.5)"
            }}
          >
           
            <input  type="file"
                    accept="pdf/*"
                    //name="hashdoc"
                    //value={this.state.hashdoc}
                    onChange={this.onFileChangeDoc}                

                    ref="input"
                  />

            <Button
             // disabled={!isEnabledtxh}
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
              onClick={() => toast.success('Successfully toasted!')}
            >
              Verificar
            </Button>
          </Form>
         
         
        </div>


      </div>
    );
  }
}

export default VertificarCertificado;
