/*
1.create reducer for handling this list of comments and generating our comments piece of state.
2. we to test the reducer. First we to write the reducer and then we will write all the tests for it and then we will implement the reducer.
3. our reducer we have got one action type floating around our entire applciation. We need to test the default case which is we pass in an action that we kow that the reducer. To test the initial state of the reducer.
4. We need to test each possible action that the reducer cares about.
*/

import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    
    it('handles action with unknown type', () => { //to test initial state fo reducer that is empty array
        
        //http://chaijs.com/api/bdd/ -- matchers
        
        expect(commentReducer(undefined,{})).to.eql([]);
    });
    
    it('handles action of type SAVE_COMMENT', () => { // testing the action type.
       
        const action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(commentReducer([], action)).to.eql(['new comment']);
        
    });
    
});