import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { GetAllPageComponent } from './components/get-all-page/get-all-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ChooseConnectionComponent } from './components/choose-connection/choose-connection.component';
import { AddComponent } from './components/parents/add/add.component';
import { ListComponent } from './components/parents/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPageComponent,
    GetAllPageComponent,
    ChooseConnectionComponent,
    AddComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
