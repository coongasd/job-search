import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './Reducer/UserReducer';
import { getAllJobReducer, getJobDetailReducer, jobCreateReducer } from './Reducer/JobReducer';

const reducer = combineReducers({
  
    userLogin:userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    createJob:jobCreateReducer,
    getAllJob: getAllJobReducer,
    getSingleJob: getJobDetailReducer
});

    //login

    const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
 
    userLogin:{ userInfo:userInfoFromLocalStorage },
    
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;