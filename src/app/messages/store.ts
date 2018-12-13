import { INCREMENT, DECREMENT } from './actions';
import { tassign} from 'tassign';

export interface IMessagingState {
    counter: number
}

export const MESSAGING_INITIALSTATE: IMessagingState = {
    counter : 0
}

export function messagingReducer(state: IMessagingState = MESSAGING_INITIALSTATE, action): IMessagingState{
    switch (action.type) {     
        case INCREMENT: return increment(state);
        case DECREMENT: return decrement(state);
    }
    return state;
}

function increment(state){
    return tassign(state, {counter: state.counter + 1}); 
}

function decrement(state){
    return tassign(state, {counter: state.counter - 1}); 
}