import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { DELETE_ALL } from './actions';
import { ITaskingState } from './store';
import { IAppState } from '../store';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    datetime = null;

  constructor(private redux: NgRedux<IAppState>){
    var sub = redux.subscribe( () => {
      var store = redux.getState();
      this.datetime = store.tasking.lastUpdate;
    });
  }
  deleteall(){
    this.redux.dispatch( { type: DELETE_ALL } );
  }
}
