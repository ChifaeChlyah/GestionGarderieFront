import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { GetAllPageComponent } from './components/get-all-page/get-all-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ChooseConnectionComponent } from './components/choose-connection/choose-connection.component';
import { ParentConnectionComponent } from './components/parent-connection/parent-connection.component';
import { AdminConnectionComponent } from './components/admin-connection/admin-connection.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ParentPageComponent } from './parent-page/parent-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPageComponent,
    GetAllPageComponent,
    ChooseConnectionComponent,
    ParentConnectionComponent,
    AdminConnectionComponent,
    DashboardAdminComponent,
    ParentPageComponent
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
