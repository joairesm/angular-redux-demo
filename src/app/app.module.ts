import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgRedux, NgReduxModule} from 'ng2-redux';
import { IAppState, rootReducer, INITIALSTATE } from './store';
import { FormsModule } from '@angular/forms';

import {DashboardComponent} from './dashboard/dashboard.component';
import {TaskComponent} from './TaskManager/task.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor (redux: NgRedux<IAppState>){
    redux.configureStore(rootReducer, INITIALSTATE)
  }
}
