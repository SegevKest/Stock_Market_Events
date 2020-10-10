import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Customers_Opinions from './Customers_Opinions'
import Our_Services from './Our_Services'
import Header from '../common_Copms/Header';
import IPOS from '../main_Components/IPOS';
import Earnings from '../main_Components/Earnings';
import News from './News';
import API_Controller from '../Controllers/API_Controller';
import { Redirect, Link} from 'react-router-dom';

class Main_Frame extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      isInMainServices:true,
      selectedService:"",
      ourServices : [
        {
          serviceName:"IPOs",
          description:"asdsadasdsada",
          imageUrl:"",
          index:"1"
        },
        {
          serviceName:"Earnings",
          description:"asdasdsadsadasd",
          imageUrl:"",
          index:"2"
        }
      ],
    }
    this.userSelectedService = this.userSelectedService.bind(this);
  }

  userSelectedService(serviceName)
  {
    /* Chaingng the State for redirection to the necessary route*/ 
    this.setState( { isInMainServices:false, selectedService:serviceName });
  }



  render() {
    const selectedService = this.state.selectedService;

    return (
      <Jumbotron >        
        {/* Add here the main services that we offer*/ }

        { this.state.isInMainServices ? 
        <Our_Services ourServices={this.state.ourServices} selectService={this.userSelectedService}></Our_Services>
        :  
        <Redirect to={'/services/'+selectedService}/>
      }
      </Jumbotron>
  );
  }
}

export default Main_Frame;
