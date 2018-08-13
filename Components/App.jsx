import React from 'react';
// import styles from './index.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
class Login extends React.Component{
  constructor() {
      super();
      this.state = {
      title:"askdjf",
username:"",
password:""
      }
   }
changeTitle(title){
this.setState({title});
}
  render(){

    var divstyle = {
      backgroundColor:'blue',
      backgroundImage:'/home/loay/Desktop/film-1668918__340.jpg',
      backgroundSize:'10000px 10000px',
      backgroundRepeat:'repeat'
    }
    var styles = {
      position: 'relative',
      borderRadius: '25px',
      background: 'orange',
      padding: '20px',
      width:'800px'


    };


    return(
      <div style={divstyle}>
      <div style={styles}>
      <Header/>
    <LoginBar changeTitletitle = {this.changeTitle.bind(this)} title={this.state.title}/>
    </div>
    <Footer/>

  </div>
    );
  }
}
class LoginBar extends React.Component{
handleChange(e){
  const title = e.target.value;
this.props.changeTitletitle(title);
}
  render(){


console.log(this.props.title);
    return(
      <div>

      <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>

  </div>
    );
  }
}
export default Login;
