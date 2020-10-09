import React from 'react';
import Card from 'react-bootstrap/Card'


class Service extends React.Component  {

  constructor(props){
    super(props);
    this.moveToServiceByClick = this.moveToServiceByClick.bind(this);
  }

  moveToServiceByClick() {
    /* when Clicking on the Service, We will return the Name of the Service Selected */
    this.props.selectService(this.props.service.serviceName);
  }


  render() {
    return (
      <Card className="text-center" bg='dark' text='white' style={{ width: '30%' }} onClick={this.moveToServiceByClick}>
      <Card.Img variant="top" src={this.props.service.imageUrl} />
      <Card.Body>
        <Card.Title as='h5'>{this.props.service.serviceName}</Card.Title>
        <Card.Text>
        {this.props.service.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
    <small className="text-muted">{this.props.service.index}</small>
      </Card.Footer>
    </Card>
  );
  }
}

export default Service;
