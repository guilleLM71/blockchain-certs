import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import web3 from "./web3.js";
import "./App.css";
import certcontract from "./config.js";
import Registro from "./componentes/registro";
import VertificarCertificado from "./componentes/vertificarcertificado";
import Certificar from "./componentes/certificar";
import Navegacion from "./componentes/navegacion";
import Formulario from "./componentes/formulario";
import RutaPrivada from "./componentes/rutarprivada.jsx";
import VerCertificado from "./componentes/vercertificado.jsx";
import FormularioHashDoc from "./componentes/formulariohashdoc.jsx";
import RutaPrivadaAdmin from "./componentes/rutaprivadaadmin.jsx";
import Contacto from "./componentes/contacto.jsx";
import Informacion from "./componentes/informacion.jsx";
import Inicio from "./componentes/inicio.jsx";
import GenerarPDF from "./componentes/generarpdf.jsx";
import RutaPrivada2 from "./componentes/rutaprivada2.jsx";
import { create } from "ipfs-http-client";
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { Button } from "bootstrap";
const client = create('https://ipfs.infura.io:5001/api/v0');
const urls=[];
class App extends Component {
  state = {
    cuenta: "",

    emisor: "",
    direccionemisor: "",
    fechaemision: "",

    tituloProf: "",
    tituloCurso: "",
    ci: "",
    nombre: "",
    gradoacademico: "",
    

  
    timestamp: "",
    txh: "",
    id: "",

    datos: [],
    encontrado: false,

    estudiante: [],
    sw: false,

    imagen: "",
    hashdoc: "",
    datoshashdoc: [],
    encontradohashdoc: false,

    swcuenta: false,
    swcuentaadmin: false,
    estudiantes:[],
    urlArr:"",
    file:""
  };


  retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      this.setState({file:Buffer(reader.result)});
    }

    e.preventDefault();  
  }
 
  handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const created = await client.add(this.state.file);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      urls.push(url);
      this.setState({ urlArr:urls });     
    } catch (error) {
      console.log(error.message);
    }
    console.log(urls);
    console.log(this.state.urlArr)
  };

  async componentDidMount() {
    console.log("mounted");
    this.cargardatosblockchain();
    this.fetchTasks();

  }

 
  
  



  fetchTasks = ()=> {
    
    
    fetch("http://localhost:4000/api/estudiantes")
    .then(res => res.json())
      .then(data => {
        this.setState({estudiantes: data});
        console.log(this.state.estudiantes);
      });
    
}

  
  cargardatosblockchain = async () => {

    if (web3) {
      
      try {
        // Request account access if needed
        
         await window.ethereum.enable();

         const accounts = await web3.eth.getAccounts();
         web3.eth.defaultAccount = accounts[0];
         console.log(certcontract);
         console.log(accounts);
         console.log("acc", accounts[0]);
         this.setState({ cuenta: accounts[0] });
     
         await window.ethereum.on(
           "accountsChanged",
     
           async () => {
             // Time to reload your interface with accounts[0]!
     
             console.log("cambio");
             // accounts = await web3.eth.getAccounts();
             window.location.reload();
           }
         );
     
          await certcontract.methods
           .verificarInstituto(this.state.cuenta)
           .call({ from: this.state.cuenta,  gas: 500000, }, (error, result) => {
             if (!error) {
               this.setState({ swcuenta: result });
               console.log(result);
               console.log(this.state.swcuenta);
               //console.log(result);
               //this.history.pushState("certfound");
               // console.log(this.state.output);
             } else alert("Conecte su wallet de metamask");
           });
     
         /*
           await certcontract.methods
           .ownerprivado()
           .call({ from: this.state.cuenta }, (error, result) => {
             if (!error) {
               this.setState({ swcuenta: result });
               console.log(result);
               console.log(this.state.swcuenta);
               //console.log(result);
               //this.history.pushState("certfound");
               // console.log(this.state.output);
             } else alert("INVITADO");
           });
     
           
           ownerprivado=0xFe00C1F17163386F9815Bb19aFd75fef555AF9C9

           0xCE92Ff30b3cA073FF12632f6676A2dAF9582A3dE
           */
     
     
         if (this.state.cuenta === "0xFe00C1F17163386F9815Bb19aFd75fef555AF9C9") {
           this.setState({ swcuentaadmin: true });
     
           console.log("admin " + this.state.swcuentaadmin);
           //console.log(result);
           //this.history.pushState("certfound");
           // console.log(this.state.output);
         }

         const fechaemision=new Date();
         console.log(fechaemision.toLocaleString())
         const idd=await certcontract.methods.contadorcerts().call();
         console.log(idd);
     
         const getinstitucion=await certcontract.methods.Instituciones().call();
         console.log(getinstitucion);

      } catch (error) {
        
        console.log(certcontract);
      }
    }
    // Legacy dapp browsers...
   


    //added line 30
    
  };

  //myevent =()=> certcontract.added();
  //myevent=>watch((error,result)=>{
  //  console.log(result);
  //});

  crear = async (data) => {

    console.log(data)

    const idd = parseInt(await certcontract.methods.contadorcerts().call());
    console.log(idd);

    const getinstitucion= await certcontract.methods.Instituciones(this.state.cuenta).call();
    console.log(getinstitucion);

    const institucion = await getinstitucion[2]
    const diremisor = await getinstitucion[1]

    const fechaemision = ""+new Date().toLocaleDateString()

  
    //console.log(idd+nombre+fi+ff+fechaemision+institucion+diremisor+data.tituloCurso+data.ci+data.imageSrc);
    console.log(this);
    console.log(data.hashdoc);
    console.log(data.imageSrcpdf);

    try {
      const created = await client.add(data.imageSrcpdf);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
     // urls.push(url);
      this.setState({ urlArr:url });     
    } catch (error) {
      console.log(error.message);
    }
    console.log(urls);
    console.log(this.state.urlArr)

  
    certcontract.methods
      .emitirCertificado(

        data.hashdoc,
        institucion,
        diremisor,
        data.gradoacademico,
        data.ci,
        data.nombre,   
        fechaemision,
        this.state.urlArr
      )
      .send(
        {
          from: this.state.cuenta,
          gas: 500000,
        },
        (error, result) => {
          if (error) {
            console.log("hasta aqui");
          console.log("error " + error);}
          else {
           
            this.setState({ gradoacademico: data.gradoacademico });
            this.setState({ ci: data.ci });
            this.setState({ nombre: data.nombre });
            this.setState({ imagen: data.imageSrc });

            this.setState({ id: idd });
            this.setState({ emisor: getinstitucion[1]});

            this.setState({ direccionemisor: getinstitucion[0]});

            this.setState({ fechaemision: fechaemision });
            
            this.setState({hashdoc:data.hashdoc});
            this.setState({ txh: result });

            console.log(result);
            console.log("hasta aqui");
            console.log(result.args);
/*
            const typesArray = [
              { type: "uint256", name: "id" },
              { type: "string", name: "institucion" },
              { type: "address", name: "emisor" },
              { type: "string", name: "tituloProfesional" },
              { type: "string", name: "titulocurso" },
              { type: "uint256", name: "ci" },
              { type: "string", name: "nombre" },
              { type: "string", name: "appaterno" },
              { type: "string", name: "apmaterno" },
              { type: "uint256", name: "createdAt" },
            ];

            web3.eth.getTransactionReceipt(result)
            .then(async (logs) => {
              //console.log("data" + logs.logs[0].data);
              //console.log("topics" + logs.logs[0].topics);
              console.log("topics" + logs);
            });
            
            web3.eth.getTransactionReceipt(result)
            .then(async (logs) => {
              //console.log("data" + logs.logs[0].data);
              //console.log("topics" + logs.logs[0].topics);
              console.log("topics" + logs);

              const args = await web3.eth.abi.decodeLog(
                typesArray,
                logs.logs[0].data,
                logs.logs[0].topics
              );

              this.setState({ id: args[0] });
              this.setState({ emisor: args[1] });

              this.setState({ direccionemisor: args[2] });

              this.setState({ fechaemision: args[9] });

              console.log(args);
            });
            */
          }
        }
      );
  };

  crearhashdoc = async (data) => {
    certcontract.methods
      .crearCertificadoHashDoc(
        data.hashdoc
        //data.hashdoc
      )
      .send(
        {
          from: this.state.cuenta,
          gas: 500000,
        },
        (error, result) => {
          if (error) console.log("error " + error);
          else {
            this.setState({ hashdoc: data.hashdoc });
            this.setState({ txh: result });

            console.log(result);
            console.log("hasta aqui 2");
            console.log(result.args);

            const typesArray = [
              { type: "string", name: "institucion" },
              { type: "address", name: "emisor" },
              { type: "uint256", name: "createdAt" },
            ];

            const receipt = web3.eth.getTransactionReceipt(result);
            receipt.then(async (logs) => {
              console.log("data" + logs.logs[0].data);
              console.log("topics" + logs.logs[0].topics);

              const args = await web3.eth.abi.decodeLog(
                typesArray,
                logs.logs[0].data,
                logs.logs[0].topics
              );

              //this.setState({ id: args[0] });
              this.setState({ emisor: args[0] });

              this.setState({ direccionemisor: args[1] });

              this.setState({ fechaemision: args[2] });

              console.log(args);
            });
          }
        }
      );
  };

  obtener = async (data) => {


    const contador= parseInt(await certcontract.methods.contadorcerts().call());
    const certficadosarray=[];
    
     //console.log(data.id);

    
    certcontract.methods
      .certificados(data.id)
      .call({ from: this.state.cuenta,  gas: 500000, }, (error, result) => {
        if (!error) {
          //console.log(result);
          const v = Object.values(result);

          this.setState({ datos: v });

          this.setState({ encontrado: true });
          //this.history.pushState("certfound");
          // console.log(this.state.output);
        } else{
          if(     this.state.encontrado===false                ){
            

            this.setState({datos : certficadosarray[data.id]}) ;
            this.setState({ encontrado: true });
            console.log(certficadosarray[data.id])
          } else alert("Certificado no ecncontrado");
        
        }
      })
      
      
  };

  obtenerCertHashDoc = (data) => {
    //console.log(data.id);
    certcontract.methods
      .verificarcertificado(data.hashdoc)
      .call({ from: this.state.cuenta,  gas: 500000, }, (error, result) => {
        if (!error) {
          //console.log(result);
          const v = result;
          console.log(v);
          if (
            v
          ) {
            
            toast.success('Successfully toasted!')
            
          } else {
           
            toast.success('Successfully toasted!')
          }

          this.setState({ datoshashdoc: v });

          this.setState({ encontradohashdoc: true });
          //this.history.pushState("certfound");
          console.log(this.state.datoshashdoc);
          //alert(this.state.encontradohashdoc);


        } else alert("Certificado no ecncontrado");
      })
     
  };

  agregarinstituto = (data) => {
    certcontract.methods.agregarInstitucion(data.adress, data.nombre).send(
      {
        from: this.state.cuenta,
        gas: 500000,
      },
      (error, result) => {
        if (error) console.log("error " + error);
        else {
          console.log("result" + result);
        }
      }
    );
  };

  handlerpadreapp = (p1) => {
    this.setState({
      imagen: p1,
    });
  };

  render() {
    
  
    return (
      <div className="App">
        <Router>
          <Navegacion
            //login={this.cargardatosblockchain}
            cuenta={this.state.cuenta}
            swcuenta={this.state.swcuenta}
            swcuentaadmin={this.state.swcuentaadmin}
          />


          <Route path="/inicio" component={() => <Inicio />} />
         
          <RutaPrivada
            path="/certificar"
            exact
            component={() => (
              <Formulario
                crearcertificado={this.crear}
                crearcertificadohashdoc={this.crearhashdoc}
                handlerpadreapp={this.handlerpadreapp}
                estudiantes={this.state.estudiantes}
                component={() => (
                  <>
                    <VerCertificado
                      component={() => (
                        <Certificar
                          txh={this.state.txh}
                          id={this.state.id}
                          emisor={this.state.emisor}
                          direccionemisor={this.state.direccionemisor}
                          tituloProf={this.state.tituloProf}
                          tituloCurso={this.state.tituloCurso}
                          ci={this.state.ci}
                          nombre={this.state.nombre}
                          paterno={this.state.paterno}
                          materno={this.state.materno}
                          fechaemision={this.state.fechaemision}
                          imagen={this.state.imagen}
                          details={this.state.output}
                        />
                      )}
                    ></VerCertificado>
                  </>
                )}
              />
            )}
            /*
            component2={() => (
              <>
                <FormularioHashDoc
                  crearcertificadohashdoc={this.crearhashdoc}
                ></FormularioHashDoc>
              </>
            )}
            */
            /*
            component3={() => (
              <>
                <VerCertificado
                  component={() => (
                    <Certificar
                      txh={this.state.txh}
                      id={this.state.id}
                      emisor={this.state.emisor}
                      direccionemisor={this.state.direccionemisor}
                      tituloProf={this.state.tituloProf}
                      tituloCurso={this.state.tituloCurso}
                      ci={this.state.ci}
                      nombre={this.state.nombre}
                      paterno={this.state.paterno}
                      materno={this.state.materno}
                      fechaemision={this.state.fechaemision}
                      imagen={this.state.imagen}
                      details={this.state.output}
                    />
                  )}
                ></VerCertificado>
              </>
            )}
                     
*/
            swcuenta={this.state.swcuenta}
          />


          

          <Route
            path="/verificar"
            render={() => (
              <VertificarCertificado
                verificarcertificado={this.obtener}
                encontrado={this.state.encontrado}
                datos={this.state.datos}
                verificarcertificadohashdoc={this.obtenerCertHashDoc}
                encontradohashdoc={this.state.encontradohashdoc}
                datoshashdoc={this.state.hashdoc}
              />
            )}
          />

          <RutaPrivadaAdmin
            path="/registro"
            exact
            component={() => (
              <Registro agregarinstituto={this.agregarinstituto} />
            )}
            swcuentaadmin={this.state.swcuentaadmin}
          />

          <Route path="/contacto" component={() => <Contacto />} />

          <Route path="/informacion" component={() => <Informacion />} />
        </Router>
      </div>
    );
  }
}

export default App;

/**
 * 
 

          <form onSubmit={this.handleSubmit}>
                  <input type="file" name="data" onChange={this.retrieveFile} />
                  <img src={this.state.file} alt="nfts" />
                  <button type="submit" className="btn">Upload file</button>
                </form>
           
                    <div className="display">
                  {this.state.urlArr.length !== null
                    ? <img src={this.state.urlArr} alt="nfts" />
                    : <h3>Upload data</h3>
                  }
                </div>
                    
            <div >
               {console.log(this.state.file)}
              {console.log(this.state.urlArr)}
            </div>

            <div className="yourimg">

            </div>
              { fetch('https://ipfs.infura.io/ipfs/QmfEh6dqo3dJV4uy5W12PdUYz6xcXbmRpnTQiAutG5wppE')
            .then(response => response.text())
            .then(data =>{
                console.log(data);
            })
             } 




 
 <Route
            path="/ver"
            component={() => (
              <>
             <VerCertificado  component={() => (
              <Certificar
              txh={this.state.txh}
              id={this.state.id}
              emisor={this.state.emisor}
              direccionemisor={this.state.direccionemisor}
              tituloProf={this.state.tituloProf}
              tituloCurso={this.state.tituloCurso}
              ci={this.state.ci}
              nombre={this.state.nombre}
              paterno={this.state.paterno}
              materno={this.state.materno}
              fechaemision={this.state.fechaemision}
              imagen={this.state.imagen}
              details={this.state.output}
            />
               )}>
                
                </VerCertificado>
              </>

            )}
          />

 */
