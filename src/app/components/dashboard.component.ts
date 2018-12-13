import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import {IAppState} from './../store';
import { ADD_TODO, REMOVE_TODO, TOGGLE, DELETE_ALL } from './../actions';
import { todo } from './../Models/Todos';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    count = 0;

  constructor(private redux: NgRedux<IAppState>){
    var sub = redux.subscribe( () => {
      var store = redux.getState();
      this.count = store.counter;
    });
  }
  deleteall(){
    this.redux.dispatch( { type: DELETE_ALL } );
  }
}
