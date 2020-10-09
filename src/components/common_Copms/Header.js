import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



class Header extends React.Component  {

  constructor(props){
    super(props);
    this.state = {

          } ;  
  }



  render() {
    return (
<div >
      <Navbar  sticky="top" bg="dark" variant="dark">
      <Navbar.Brand >
        Stock Market Events
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
        <Nav.Link ><Link to="/news">News</Link></Nav.Link>
        <Nav.Link ><Link to="/aboutus">About Us</Link></Nav.Link>
      </Nav>
    </Navbar>
    </div>
  );
  }
}

export default Header;
