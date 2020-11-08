/* eslint-disable no-unused-vars */
const initialLocalState = {

/** The initialized State for the website - will include all the iPos, Earining  news and customerData */
                                allNews:[],
                                iPos:[],
                                earinings:[],
                                user:
                                {
                                        firstName:'',
                                        lastName:'',
                                        loggedIn:'',
                                        customizeReport:[]
                                }
                            };



const stockEventsReducer = (state = initialLocalState , action) => {

        let newState;
        newState = Object.assign({}, state);

        switch (action.type) {

                // For Login
                // {type:"USER_LOGIN", data:userObj}
                case 'USER_LOGIN':
                        newState.user = action.data; 
                        return newState;

                // For Logout
                // {type:"USER_LOGOUT"}
                case 'USER_LOGOUT':
                        newState.user = initialLocalState.user;
                        return newState;
                
                //ForFetching the News From API
                // {type:"USER_FETCH_NEWS", data:newArray_FromAPI}
                case 'USER_FETCH_NEWS':
                        newState.allNews = action.data;  
                        return newState;

                //ForFetching the IPOS From API
                // {type:"USER_FETCH_IPOS", data:newArray_FromIPOS}
                case 'USER_FETCH_IPOS':
                        newState.iPos = action.data;     
                        return newState;

                //ForFetching the EARNINGS From API
                // {type:"USER_FETCH_EARNINGS", data:newArray_FromEARNINGS}
                case 'USER_FETCH_EARNINGS':
                        newState.earinings = action.data;     
                        return newState;

                default:
                        return state;
        }
};

export default stockEventsReducer;

