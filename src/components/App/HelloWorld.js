import React, { Component } from 'react';
import electron, {ipcRenderer} from 'electron';
import {AUTO_DOWNLOAD, AUTO_DOWNLOAD_CLICK} from '../../../util/constants'
class HelloWorld extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log('handle click');
    ipcRenderer.send(AUTO_DOWNLOAD,'ping');
  }
  componentDidMount(){
    ipcRenderer.on(AUTO_DOWNLOAD_CLICK,this.handleRander);
  }
  componentWillUnmount(){
    ipcRenderer.removeListener(AUTO_DOWNLOAD_CLICK,this.handleRander);
  }

  handleRander(event,data){
    console.log('render !!', data);
  }
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
        <button onClick={this.handleClick}>Send!</button>
      </div>
    );
  }
}

export default HelloWorld;