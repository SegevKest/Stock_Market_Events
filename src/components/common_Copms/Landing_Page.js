import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IPOS from '../main_Components/IPOS';
import Main_Frame from '../main_Components/Main_Frame';
import Earnings from '../main_Components/Earnings';
import About_us from '../main_Components/About_us';
import News from '../main_Components/News';
import Header from './Header';
import Not_Found_Page from './Not_Found_page';



class Landing_Page extends React.Component  {


  render() {
    return (
        <div>
         <Router>
          <div>
            <Header/>
            <Switch>
              <Route  path="/services/ipos" ><IPOS/></Route>
              <Route  path="/services/earnings"  ><Earnings/></Route>
              <Route  path="/news" ><News/></Route>
              <Route  path="/aboutus"  ><About_us/></Route>
              <Route  exact path="/" ><Main_Frame/></Route>
              <Route  path="*"  ><Not_Found_Page/></Route>
            </Switch>
          </div>
        </Router>
      </div>

  );
  }
}

export default Landing_Page;
