import {postReducer} from "../reducers/postReducer";
import {GET_POSTS,MAKE_POST} from "../actions/types";

describe('Testing PostReducer', () =>{
    test('Testing Getting All Posts',() =>{
        const newState = postReducer({},{type:GET_POSTS, payload:{name:'Shadman'}});
        expect(newState).toEqual({name:'Shadman'});
    });

    test('Testing Making a post',() =>{
        const newState = postReducer({name:'Shadman'},{type:MAKE_POST, payload:{age:100}});
        expect(newState).toEqual({name:'Shadman',age:100});
    });
});