import React from 'react';


class Footer extends React.Component{
  constructor(){
    super();
    this.name = "elzobaidy";
  }
  render(){
    return(
      <h1>it is {this.name}</h1>
    );
  }
}
export default Footer;
