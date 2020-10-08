import React from 'react';
import Header from "./Header.js";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class MainForm extends React.Component  {
  render() {
    return (
<Form>
  <Header/>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
    <Button variant="primary" size="lg" >
    Primary button
  </Button>
</Form>
  );
  }
}

export default MainForm;
