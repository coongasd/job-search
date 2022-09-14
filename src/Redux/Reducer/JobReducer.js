import { ALL_JOB_FAIL, ALL_JOB_REQUEST, ALL_JOB_SUCCESS, JOB_DETAIL_FAIL, JOB_DETAIL_REQUEST, JOB_DETAIL_SUCCESS, JOB_POST_FAIL, JOB_POST_REQUEST, JOB_POST_SUCCESS } from "../Constants/JobConstants";

export const jobCreateReducer = (state = {} , action) =>
{
    switch(action.type){
        case JOB_POST_REQUEST:
        return { loading:true};
        case JOB_POST_SUCCESS:
            return{loading: false,  success:true, job: action.payload};
        case JOB_POST_FAIL:
           return { loading: false, error: action.payload};
        default:
            return state;
    }
};
export const getAllJobReducer = (state = {} , action) =>
{
    switch(action.type){
        case ALL_JOB_REQUEST:
        return { loading:true};
        case ALL_JOB_SUCCESS:
            return{loading: false,  success:true, jobs: action.payload};
        case ALL_JOB_FAIL:
           return { loading: false, error: action.payload};
        default:
            return state;
    }
};

export const getJobDetailReducer = (state = {} , action) =>
{
    switch(action.type){
        case JOB_DETAIL_REQUEST:
        return { loading:true};
        case JOB_DETAIL_SUCCESS:
            return{loading: false,  success:true, job: action.payload};
        case JOB_DETAIL_FAIL:
           return { loading: false, error: action.payload};
        default:
            return state;
    }
};