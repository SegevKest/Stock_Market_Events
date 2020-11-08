const initialLocalState = {

/** The initialized State for the website - will include all the iPos, Earining  news and customerData */
                                allNews:[],
                                iPos:[],
                                Earining:[],
                                customer:
                                {
                                        firstName:'',
                                        lastName:'',
                                        loggedIn:'',
                                        customizeReport:[]
                                }
                            };



const stockEventsReducer = (state = initialLocalState , action) => {

        switch (action.type) {
                // For Login
                case 'USER_LOGIN':
                case 'USER_LOGOUT':
                case 'USER_FETCH_NEWS':
                case 'USER_FETCH_IPOS':
                case 'USER_FETCH_EARNINGS':

                default:
                        return state;
        }
};

export default StockEventsReducer;

