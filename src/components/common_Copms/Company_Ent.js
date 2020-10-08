import React from 'react';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import InfoModal  from "./InfoModal";


class Company_Ent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      isInIPO:false,
      isInEarnings:false,
      showModal : false
    }
    this.changeModalApperance = this.changeModalApperance.bind(this);
  }

  componentDidMount(){
    this.props.current == 'IPOs' ? 
    this.setState( { isInIPO: true } ) :  this.setState( { isInEarnings: true } )
  }

  changeModalApperance() {
    
    this.setState({showModal : !this.state.showModal }    );
  }

  render() {
    const ipoCompnay = 
                  <Table striped bordered hover variant="dark">
                  <tbody>
                    <tr>
                      <th>Ticker</th>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <th>Exchange</th>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <th>Currency</th>
                      <td>{}</td>
                    </tr>
                    </tbody>
                  </Table>;

    const earningsCompnay = 
              <Table striped bordered hover variant="dark">
                    <thead>
                      <th>Data</th>
                      <th>Actual</th>
                      <th>Estimates</th>
                      <th>Prior</th>
                    </thead>
                    <tbody>
                    <tr>
                      <td>EPS</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                    </tr>
                    <tr>
                      <td>Revenue</td>
                      <td>{}</td>
                      <td>{}</td>
                      <td>{}</td>
                    </tr>
                    </tbody>
                  </Table> ;       

    return (
        <Card style={{ width: '24rem' }} bg='dark' text='white'> 
            <Card.Img variant="top" src="holder.js/100px180" />            
            <Card.Body>
            {
              this.state.isInEarnings ? 
              /**Earnings Title : IPO Title */
              <Card.Title>
              BAC, Bank of America, Q2,2021
                <Badge pill variant="success" style={{float:"right"}}>10:00:00, MM/DD/YYYY</Badge>
              </Card.Title> 
              : 
              <Card.Title>
                      BYND, Beyond Meat
                <Badge pill variant="danger" style={{float:"right"}}>MM/DD/YYYY</Badge>
              </Card.Title>
            }
              <Card.Text>
              {
                this.state.isInEarnings ? 
                earningsCompnay : ipoCompnay
              }

              </Card.Text>
                  <Badge pill style={{fontSize:'25px'}} pill variant="secondary" onClick = {()=>this.changeModalApperance()}>&#127891;</Badge>
            </Card.Body>

            <InfoModal onHide = {()=>this.changeModalApperance()} show={this.state.showModal} companyDetails={null}/>
        </Card>

        
  );
  }
}

export default Company_Ent;
