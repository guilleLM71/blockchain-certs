import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import b1 from "../b3.jpg";
import FormularioEstudiante from "./formularioestudiante";
//import certcontract from "../config.js";
import sha256 from "crypto-js/sha256";
import Imagenes from "./imagenes";
import FileUploader from "./FileUploader";

class FormularioHashDoc extends Component {
  canBeSubmitted() {
    const { tituloProf, tituloCurso, ci, nombre, paterno, materno } =
      this.props;
    return (
      tituloProf.length > 0 &&
      tituloCurso.length > 0 &&
      ci.length > 0 &&
      nombre.length > 0 &&
      paterno.length > 0 &&
      materno.length > 0
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  crearcertificado = (event) => {
    event.preventDefault();
    this.props.crearcertificado(this.state);
    //console.log(this);
    this.props.handlerpadreapp(this.state.imageSrc);
  };

  crearcertificadohashdoc = (event) => {
    event.preventDefault();
    this.props.crearcertificadohashdoc(this.state);
    //console.log(this);
  };

  state = {
    tituloProf: "",
    tituloCurso: "",
    ci: "",
    nombre: "",
    paterno: "",
    materno: "",

    active: false,
    imageSrc: "",
    imageName: "",
    image: [],
    loaded: false,

    activepdf: false,
    imageSrcpdf: "",
    imageNamepdf: "",
    imagepdf: [],
    loadedpdf: false,

    hashdoc: "",

    /*
    estudiante:[],
    sw:false
*/
  };
  /*
   buscaEstudiante =  (data) =>  {
    const ci=data.ci;
    for(let i=0;i<6;i++){
      certcontract.methods.listaE(i)
          .call(
            {from: this.state.account},        
            (error, result) => {
              if (!error) {
                //console.log(result);
                const v = Object.values(result);
                if(v[0]===ci){
                  this.setState({estudiante: v})
                  this.setState({sw:true})
                  //this.history.pushState("certfound");
                  //console.log(this.state.estudiante);
                }
                
              } else alert("estudiante not found");
            }
           );
     
      
    }
  }
 
*/
  handlerpadre = (p1, p2, p3, p4) => {
    this.setState({
      ci: p1,
    });
    this.setState({
      nombre: p2,
    });
    this.setState({
      paterno: p3,
    });
    this.setState({
      materno: p4,
    });
  };

  /*
  someMethodapp = (p1) => {
    this.props.handlerpadreapp(p1);
  };
*/

  onDragEnter = (e) => {
    this.setState({ active: true });
  };

  onDragLeave = (e) => {
    this.setState({ active: false });
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDrop = (e) => {
    e.preventDefault();
    this.setState({ active: false });
    this.onFileChange(e, e.dataTransfer.files[0]);
  };

  onFileChange = (e) => {
    console.log("on-file-change");
    var file = e.target.files[0],
      pattern = /image-*/,
      reader = new FileReader();
    console.log(file.name);
    if (!file.type.match(pattern)) {
      alert("Formato inválido");
      return;
    }
    console.log(this);
    this.setState({ loaded: false });

    reader.onload = (e) => {
      this.setState({
        imageSrc: reader.result,
        loaded: true,
        imageName: file.name,
      });

      console.log(reader.result);
      //this.someMethodapp(reader.result);
    };

    //this.someMethodapp(this.state.imageSrc);

    reader.readAsDataURL(file);
  };

  
  onFileChangeDoc = (e) => {
    console.log("on-file-change");
    var file = e.target.files[0];
    var pattern = /pdf-*/;
    const reader = new window.FileReader();
    console.log(file.name);
    reader.readAsArrayBuffer(file);
    if (!file.type.match(pattern)) {
      alert("Formato inválido");
      return;
    }
    console.log(this);
    this.setState({ loadedpdf: false });

    reader.onload = (e) => {
      this.setState({
        imageSrcpdf: Buffer(reader.result),
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


  getFileName = () => {
    return this.state.imageName;
  };
  getFileObject = () => {
    return this.refs.input.files[0];
  };

  getFileString = () => {
    return this.state.imageSrc;
  };

  render() {
    //const isEnabled = this.canBeSubmitted();
    return (
      <>
        <div  className="col-md-12  pt-5 pb-5" style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "55px",
            color: "#fff",
            background: "#0A192F",
          }} >
            
        <h1
          
         
        >
          Registrar Certificado
        </h1>

        </div>
       
        

          <div
            className="col-md-12 "
            style={{
             
              background: "#0A192F",
              color: "#fff",
              backgroundSize: "cover",
             
            }}
          >
            <div
              style={{
                marginBottom:"117px",
                background: "rgba(255,255,255,0.5)",
              }}
              className="w-50 container pt-5 pb-5 mx-auto"
            >
              <h2
                style={{
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                }}
                className="mb-5"
              >
                Sube el Certificado
              </h2>

              <Form onSubmit={this.crearcertificadohashdoc}>
                <Form.Group>
                  <br />
                  <label
                    onDragEnter={this.onDragEnter}
                    onDragLeave={this.onDragLeave}
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                  >
                    <i className="icon icon-upload"></i>
                    <input
                      type="file"
                      accept="pdf/*"
                      onChange={this.onFileChangeDoc}
                      ref="input"
                    />
                  </label>
                  <br />
                </Form.Group>

                <Button
                  // disabled={!isEnabled}
                  className="mt-3"
                  variant="primary"
                  type="submit"
                >
                  Registrar
                </Button>

                <Form.Group></Form.Group>
              </Form>
            </div>
          </div>


       
      </>
    );
  }
}

export default FormularioHashDoc;
