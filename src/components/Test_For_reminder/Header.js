import React from 'react';
import Row from 'react-bootstrap/Row';


class Header extends React.Component  {

constructor(props)
{
  super(props);
  this.state = { firstName:"Segev" };
}
  render() {
    return (
      <Row>
        <h1>Hey {this.state.firstName}</h1>
      </Row>

  );
  }
}

export default Header;
