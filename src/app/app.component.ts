import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import {IAppState} from './store';
import { ADD_TODO, REMOVE_TODO, TOGGLE } from './actions';
import { todo } from './Models/Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  todos : todo[];
  newitem: '';

  constructor(private redux: NgRedux<IAppState>){
    var sub = redux.subscribe( () => {
      var store = redux.getState();
      this.todos = store.todos;
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
