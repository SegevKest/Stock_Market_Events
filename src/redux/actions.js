


// Login + Logout
export const logIn = userObj => ({type:"USER_LOGIN",data:userObj});//all users
export const logOut=()=>({type:"USER_LOGOUT"});//all users


//Fetch Data from API's
export const getAllNews = allNewsObj => ({type : 'USER_FETCH_NEWS', data : allNewsObj});

export const getAlliPos = iPosObj => ({type : 'USER_FETCH_IPOS', data : iPosObj});
export const getAllEarnings = earningsObj => ({type : 'USER_FETCH_EARNINGS', data : earningsObj});
