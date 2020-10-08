import React from 'react';
import Header from '../common_Copms/Header';

const benzinga_API_Link ='https://api.benzinga.com/api/v2.1/calender/';
const benzinga_API_Key ='?token=fdb5cb19f920425fbae3442774ed9af1';
const benzinga_API_Headers = {   'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Cache-Control':'no-store'  
                          };

class API_Controller extends React.Component  {
      /*
Yahoo Finance API - for articles      
      fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "2bdfd8560emshea65c8701b0ce69p1cd88fjsnc44399c190fa"
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log("Error During Yahoo Finance APi"+err);
    });
    }*/


   getCalenderData(){
     let preferedServiceName = 'earnings';
    let full_APIUrl = benzinga_API_Link+preferedServiceName+benzinga_API_Key;

    fetch(full_APIUrl, {
      headers: benzinga_API_Headers    
    })
    .then(response=>response.json())
    .then(earningsFromAPI =>console.log(earningsFromAPI))
    .catch( errorApi=> console.log(errorApi));


  }
    componentDidMount(){
      this.getCalenderData();
    }
}

export default API_Controller;
