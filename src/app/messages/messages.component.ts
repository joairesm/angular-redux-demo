import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { INCREMENT, DECREMENT } from './actions';
import { IAppState } from '../store';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html'
})
export class MessagesComponent {
    messages = 0;

    constructor(private redux: NgRedux<IAppState>){
        var sub = redux.subscribe( () => {
          var store = redux.getState();
          this.messages = store.messaging.counter;
        });
      }

      increment(){
        this.redux.dispatch( { type: INCREMENT } );
      }

      decrement(){
        this.redux.dispatch( { type: DECREMENT } );
      }
}
