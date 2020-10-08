import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Service from '../common_Copms/Service';


class Our_Services extends React.Component  {

  constructor(props){
    super(props);
  }

  render() {
    return (
  <CardDeck>
        {
        this.props.ourServices.map((current_service)=>
        <Service service={current_service} key={current_service.index} selectService = {this.props.selectService}></Service>        
        )}
  </CardDeck>

  );
  }
}

export default Our_Services;
