import {NEW_POST_CREATED, NEW_POST_ERROR, ALL_POSTS, ALL_POSTS_ERROR} from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case NEW_POST_CREATED:
          return { ...state, error:'', post:action.payload};
    case NEW_POST_ERROR:
      return {...state, error:action.payload };
    case ALL_POSTS:
        return {...state, error:'', posts:action.payload };
    case ALL_POSTS_ERROR:
        return {...state, error:action.payload };
  }

  return state;
}
