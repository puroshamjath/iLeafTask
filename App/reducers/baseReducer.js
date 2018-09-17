import * as actionTypes from '../actions/actionTypes';

const baseReducer = (
    state={
        loading:false,
        user: null,
        tasks:[],
        posts:[]
    },
    action
) =>{
    switch(action.type){
        case actionTypes.GET_USER_PENDING:
        return{
            ...state,
            loading:true
        }
        case actionTypes.GET_USER_SUCCESS:
        return{
            ...state,
            user:action.data,
            loading:false
        }
        case actionTypes.GET_USER_ERROR:
        return{
            ...state,
            user:null,
            loading:false
        }
        case actionTypes.GET_TASK_SUCCESS:
        return{
            ...state,
            tasks:action.data,
            loading:false
        }
        case actionTypes.GET_TASK_ERROR:
        return{
            ...state,
            tasks:[],
            loading:false
        }
        case actionTypes.GET_BLOG_SUCCESS:
        return{
            ...state,
            posts:action.data,
            loading:false
        }
        case actionTypes.GET_BLOG_ERROR:
        return{
            ...state,
            posts:[],
            loading:false
        }
        case actionTypes.UPDATE_DETAIL:
        return{
            ...state,
            detail:data,
            loading:false
        }
        default:
            return state;
    }
}

export default baseReducer;