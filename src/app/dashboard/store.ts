import { ADD_TODO, REMOVE_TODO, TOGGLE, DELETE_ALL } from './actions';
import { tassign} from 'tassign';

export interface ITaskingState {
    lastUpdate: Date;
    todos: any[];
}

export const TASKING_INITIALSTATE: ITaskingState = {
    lastUpdate : null,
    todos : []
}

export function taskingReducer(state: ITaskingState = TASKING_INITIALSTATE, action): ITaskingState{
    switch (action.type) {     
        case ADD_TODO: return addTodo(state,action);
        case REMOVE_TODO: return removeTodo(state,action);
        case DELETE_ALL: return deleteAll(state);
        case TOGGLE: return toggle(state,action);
    }
    return state;
}

function addTodo(state, action){
    var newlist = state.todos;
    newlist.push(action.todo);
    return tassign(state, {todos: newlist, lastUpdate: new Date()}); 
}

function removeTodo(state, action) {
    var newlist = state.todos;
    var index = newlist.indexOf(action.todo);
    newlist.splice(index, 1);   
    return tassign(state, {todos: newlist, lastUpdate: new Date()});
}

function deleteAll(state){
    return tassign(state, { todos:[], lastUpdate:null }); 
}

function toggle(state,action){
    var newlist = state.todos;
    var index = newlist.indexOf(action.todo);
    newlist[index].state = !newlist[index].state;
    return tassign(state, {todos: newlist});  
}