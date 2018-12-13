import { ITaskingState, TASKING_INITIALSTATE, taskingReducer } from './dashboard/store';
import { MESSAGING_INITIALSTATE, IMessagingState, messagingReducer } from './messages/store';
import { combineReducers } from 'redux';

export const INITIALSTATE: IAppState = {
    tasking: TASKING_INITIALSTATE,
    messaging: MESSAGING_INITIALSTATE
}

export interface IAppState {
    tasking: ITaskingState
    messaging: IMessagingState
}

export const rootReducer = combineReducers({
    tasking : taskingReducer,
    messaging: messagingReducer
});