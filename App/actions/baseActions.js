import * as actionTypes from './actionTypes';
import {baseUrl} from "../components/utilities/helper";
export  function getUser (data){
    return function (dispatch) {
        dispatch({
            type: actionTypes.GET_USER_PENDING,
            data: ''
        });
        fetch(baseUrl+'/5b9751e5300000332a0bd52d')
        .then(response => response.json()) 
        .then(response => {
            dispatch({
                type: actionTypes.GET_USER_SUCCESS,
                data: response
            });
            console.log(response)
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.GET_USER_ERROR,
                data: error
            });
            console.log(error)
        })
    }
}

export  function getTaks (data){
    return function (dispatch) {
        fetch(baseUrl+'/5b97533d30000070000bd533')
        .then(response => response.json()) 
        .then(response => {
            dispatch({
                type: actionTypes.GET_TASK_SUCCESS,
                data: response
            });
            console.log(response)
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.GET_TASK_ERROR,
                data: error
            });
            console.log(error)
        })
    }
}

export  function getPosts (data){
    return function (dispatch) {
        fetch(baseUrl+'/5b9755c43000006a000bd53f')
        .then(response => response.json()) 
        .then(response => {
            dispatch({
                type: actionTypes.GET_BLOG_SUCCESS,
                data: response
            });
            console.log(response)
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.GET_BLOG_ERROR,
                data: error
            });
            console.log(error)
        })
    }
}