
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

const yahoo_API_Link ='https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list?category=generalnews&region=US';
const yahoo_API_Key ='2bdfd8560emshea65c8701b0ce69p1cd88fjsnc44399c190fa';
const yahoo_API_Headers = {
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
          "x-rapidapi-key": yahoo_API_Key
        };
    
        // getCalenderData(preferedServiceName) {
    export default async function getNewsData(){
    
        let full_APIUrl = yahoo_API_Link;
    
        try {
              let yahooRes = await fetch(full_APIUrl, {
                "method": "GET",
                "headers": yahoo_API_Headers    
              });
              console.log(yahooRes);
              console.log(yahooRes.json());
              //let response = await yahooRes.json();
              
              //.then(response=>response.json())
              //.then(earningsFromAPI =>console.log(earningsFromAPI))
              //.catch( errorApi=> console.log(errorApi));
            }
        catch (error) {
              console.log("Error /n"+ error);
            }
      }


