import React from 'react';


class Header extends React.Component{
  constructor(){
    super();
    this.name = "Loay";
  }
  render(){
    return(
      <h1>it is {this.name}</h1>
    );
  }
}
export default Header;
