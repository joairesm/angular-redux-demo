import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import {ITaskingState} from './../dashboard/store';
import { ADD_TODO, REMOVE_TODO, TOGGLE } from './../dashboard/actions';
import { todo } from '../Models/Todos';
import { IAppState } from '../store';

@Component({
    selector: 'task-name',
    templateUrl: './task.component.html'
})
export class TaskComponent {
    title = 'redux-demo';
    todos : todo[];
    newitem: '';
  
    constructor(private redux: NgRedux<IAppState>){
      var sub = redux.subscribe( () => {
        var store = redux.getState();
        this.todos = store.tasking.todos;
      });
  
    }
  
    increment(){
      if(this.newitem =='') return;
      this.redux.dispatch( { type: ADD_TODO, todo: {value: this.newitem, state: true} } );
      this.newitem = '';
    }
  
    delete(todo:todo){
      this.redux.dispatch( { type: REMOVE_TODO, todo: todo } );
    }
  
    toggle(todo:todo){
      this.redux.dispatch( { type: TOGGLE, todo: todo } );
    }
}
