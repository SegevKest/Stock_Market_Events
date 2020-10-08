import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Service from '../common_Copms/Service';
import Customers_Opinions from '../main_Components/Customers_Opinions'
import Button from 'react-bootstrap/Button'


class About_us extends React.Component  {

  constructor(props){
    super(props);
  }

  render() {
    return (
<div>
<div >


  <h1 className="display-3"> Thank you for Visiting in Our MVP</h1>
        <p>Our Job at Events Geeks is to provide you all the event in the stock market that you nedd to know of!
          <br/>
          IPO's, Earnings Dates, Dividents, Confrence lcals, Merges and Splits and Alot More.
          <br/>
          You can read about the event, schedule in your calender,
          create custom report of nearest event and send it to your Email!
        </p>
        <h6>Your Opinion on our services is important to US</h6>

        <Button variant="outline-info">Share your thoughts</Button> 

      </div>

</div>

  );
  }
}

export default About_us;
