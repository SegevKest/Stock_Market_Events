
const benzinga_API_Link ='https://api.benzinga.com/api/v2.1/calender/';
const benzinga_API_Key ='?token=fdb5cb19f920425fbae3442774ed9af1';
const benzinga_API_Headers = {   'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Cache-Control':'no-store'  
                          };

    // getCalenderData(preferedServiceName) {
export default async function getCalenderData(preferedServiceName){

    //let preferedServiceName = 'earnings';
    let full_APIUrl = benzinga_API_Link + preferedServiceName + benzinga_API_Key;

    try {
          fetch(full_APIUrl, {
            headers: benzinga_API_Headers    
          })
          .then(response=>response.json())
          .then(earningsFromAPI =>console.log(earningsFromAPI))
          .catch( errorApi=> console.log(errorApi));
        }
    catch (error) {
          console.log("Error /n"+ error);
        }
  }

