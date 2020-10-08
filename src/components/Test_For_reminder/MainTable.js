import React from 'react';
import Header from "./Header.js";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

class MainTable extends React.Component  {

  constructor(props)
  {
      super(props);
  } 
  render() {
    return (
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </Table>
  );
  }
}

export default MainTable;
