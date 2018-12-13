import { ADD_TODO, REMOVE_TODO, TOGGLE, DELETE_ALL } from './actions';
import { tassign} from 'tassign';
import { todo } from './Models/Todos';

export const INITIALSTATE: IAppState = {
    counter : 0,
    todos : []
}

export interface IAppState {
    counter: number;
    todos: todo[];
}

export function rootReducer(state: IAppState, action): IAppState{
    switch (action.type) {     
        case ADD_TODO: 
            var newlist = state.todos;
            newlist.push(action.todo);
            return tassign(state, {todos: newlist,counter: state.counter + 1});     
            
        case REMOVE_TODO:
            var newlist = state.todos;
            var index = newlist.indexOf(action.todo);
            newlist.splice(index, 1);   
            return tassign(state, {todos: newlist,counter: state.counter - 1}); 
               
        case DELETE_ALL:
            return tassign(state, { todos:[], counter:0 }); 
    
        case TOGGLE:
            var newlist = state.todos;
            var index = newlist.indexOf(action.todo);
            newlist[index].state = !newlist[index].state;
            return tassign(state, {todos: newlist});  
    }
    return state;
}