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

    console.log('Action Type : ' +  action.type)
    console.log('Action Data : ' +  action.data)

    switch(action.type){

        case actionTypes.GET_USER_PENDING:
        return{
            ...state,
            loading:true
        }
        case actionTypes.GET_USER_SUCCESS:

        console.log('Action Type : true')
        console.log('Action Data : ' +  JSON.stringify(action.data.data))

        return{
            ...state,
            user:action.data.data,
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
            tasks:action.data.data,
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
            posts:action.data.data,
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