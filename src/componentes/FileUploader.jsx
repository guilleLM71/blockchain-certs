import React, { Component } from "react";

export default class FileUploader extends Component {
  form = React.createRef();
  
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      imageSrc: "",
      imageName: "",
      image: [],
      loaded: false
    };

    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onDragEnter(e) {
    this.setState({ active: true });
  }

  onDragLeave(e) {
    this.setState({ active: false });
  }

  onDragOver(e) {
    e.preventDefault();
  }

  onDrop(e) {
    e.preventDefault();
    this.setState({ active: false });
    this.onFileChange(e, e.dataTransfer.files[0]);
  }

  onFileChange(e) {
    console.log("on-file-change");
    var file =  e.target.files[0],
      pattern = /image-*/,
      reader = new FileReader();
    console.log(file.name);
    if (!file.type.match(pattern)) {
      alert("Formato inválido");
      return;
    }
    console.log(this);
    this.setState({ loaded: false });

    reader.onload = e => {
      this.setState({
        imageSrc: reader.result,
        loaded: true,
        imageName: file.name
      });
      console.log(reader.result);
    };

    
    reader.readAsDataURL(file);
  }

  getFileName() {
    return this.state.imageName;
  }
  getFileObject() {
    return this.refs.input.files[0];
  }

  getFileString() {
    return this.state.imageSrc;
  }


  someMethod = (p1) => {  

    this.props.handlerpadre2(p1)  
    
  }

  render() {
   
    return (
    
      <form name="form" ref={this.formRef} id="form">
        <label
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
        >
        
          <i className="icon icon-upload"></i>
          <input
            type="file"
            accept="image/*"
            onChange={(event)=>{this.onFileChange(event);
              this.someMethod(
              this.state.imageSrc            
             )}}
            ref="input"
          />
        </label>
      </form>
    );
  }
}
