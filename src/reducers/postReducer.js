import {GET_POSTS,MAKE_POST} from "../actions/types";

export const postReducer = (state = {}, action) =>{
    const {type,payload} = action;
    switch(type){
        case GET_POSTS:
            return {
                ...state,
                ...payload
            }
        case MAKE_POST:
            return{
                ...state,
                ...payload
            }
        default:
            return state;
    }
}