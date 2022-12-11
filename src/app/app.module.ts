import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { ListEnfantsComponent } from './components/enfants/list-enfants.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ChooseConnectionComponent } from './components/choose-connection/choose-connection.component';
import { AddComponent } from './components/parents/add-parent/add.component';
import { ListParentComponent } from './components/parents/list-parent/list-parent.component';
import { ParentConnectionComponent } from './components/parent-connection/parent-connection.component';
import { AdminConnectionComponent } from './components/admin-connection/admin-connection.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ParentPageComponent } from './components/parent-page/parent-page.component';
import {SidebarMenuModule} from "angular-sidebar-menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SideBarComponent } from './components/dashboard-admin/side-bar/side-bar.component';
import {AddAideEducComponent} from "./components/aide-educateur/add/add-aide-educ.component";
import { NavBarTopComponent } from './components/nav-bar-top/nav-bar-top.component';
import {ListAideEducComponent} from "./components/aide-educateur/list/list-aide-educ.component";


@NgModule({
  declarations: [
    AppComponent,
    AddPageComponent,
    ListEnfantsComponent,
    ChooseConnectionComponent,
    ListParentComponent,
    ParentConnectionComponent,
    AdminConnectionComponent,
    DashboardAdminComponent,
    ParentPageComponent,
    SideBarComponent,
    AddComponent,
    AddAideEducComponent,
    NavBarTopComponent,
    ListAideEducComponent
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
