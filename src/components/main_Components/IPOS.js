import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Service from '../common_Copms/Service';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import Company_Ent from '../common_Copms/Company_Ent';

class IPOS extends React.Component  {

  constructor(props){
    super(props);
  }

  render() {
    return (
<CardColumns>
 <Company_Ent current={this.props.current}/>
  </CardColumns>

  );
  }
}

export default IPOS;
