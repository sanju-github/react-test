import { SAVE_COMMENT } from '../actions/types';


export default function(state = [], action){ // state and default value i.e array and action.
    
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload];
            
                      }
    return state;
}