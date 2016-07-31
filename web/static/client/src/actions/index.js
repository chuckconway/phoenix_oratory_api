import axios from 'axios';
import {browserHistory} from 'react-router';
import {ALL_POSTS, ALL_POSTS_ERROR,AUTH_USER, UNAUTH_USER, AUTH_ERROR, NEW_POST_CREATED, NEW_POST_ERROR} from './types';


const ROOT_URL = 'http://localhost:3000/api/v1';
var authHeader = { headers:{authorization: localStorage.getItem('token')}};

export function signinUser({email, password}){
  return function(dispatch){
      //submit email/password to the server
      axios.post(`${ROOT_URL}/authentication/signin`, {email, password})
      .then(res => {
        // if success

        //update the state to indicate the user is authenticated
        dispatch({type:AUTH_USER});
        localStorage.setItem('token', res.data.token);
        browserHistory.push('/feature');
      })
      .catch(()=>{
          //dispatch({type:UNAUTH_USER});
          dispatch(authError('bad login info'));
      });
  }
}

export function signupUser({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/authentication/signup`, {email, password})
    .then((res)=> {
      dispatch({type:AUTH_USER});
      localStorage.setItem('token', res.data.token);
      browserHistory.push('/feature');
    })
    .catch((res)=> {
      dispatch(authError(res.data.error));
    })
  }
}

export function authError(error){
  return {
    type:AUTH_ERROR,
    payload:error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {type:UNAUTH_USER}
}

export function retrieveAllPosts(){
  return function(dispatch){
    axios.get(`${ROOT_URL}/post/all`)
    .then((res)=> {
      dispatch({type:ALL_POSTS, payload:res.data.data});
      //browserHistory.push('/feature');
    })
    .catch((res)=> {
      dispatch({type:ALL_POSTS_ERROR, payload:res.data.error});
    });
  }
}

export function postPost({title, content, tags, publishDate}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/post`, {title, content, tags, publishDate}, authHeader)
    .then((res)=> {
      dispatch({type:NEW_POST_CREATED, payload:res.data.post});
      //browserHistory.push('/feature');
    })
    .catch((res)=> {
      dispatch({type:NEW_POST_ERROR, payload:res.data.error});
    });
  }
}

export function fetchMessage(){
  return function(dispatch){
    axios.get(`${ROOT_URL}`, authHeader).
    then((res)=>{
        dispatch({
          type:FETCH_MESSAGE,
          payload:res.data.message
        });
    })
    .catch((res)=> {

    });
  }
}
