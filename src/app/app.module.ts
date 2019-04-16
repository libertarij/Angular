import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TodomodelsComponent } from './todomodels/todomodels.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TodomodelsService} from "./todomodels.service";

@NgModule({
  declarations: [
    AppComponent,
    TodomodelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodomodelsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
