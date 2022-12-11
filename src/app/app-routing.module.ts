import { GetAllPageComponent } from './components/get-all-page/get-all-page.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/parents/add/add.component';
import { ListComponent } from './components/parents/list/list.component';
import {ChooseConnectionComponent} from "./components/choose-connection/choose-connection.component";
import {AdminConnectionComponent} from "./components/admin-connection/admin-connection.component";
import {ParentConnectionComponent} from "./components/parent-connection/parent-connection.component";
import {DashboardAdminComponent} from "./components/dashboard-admin/dashboard-admin.component";
import {ParentPageComponent} from "./parent-page/parent-page.component";


const routes: Routes = [
  {path :"add" , component : AddPageComponent},
  {path: "get",component : GetAllPageComponent},
  {path: "add-parent",component : AddComponent},
  {path: "get-parent",component : ListComponent},
  {path: "",component : ChooseConnectionComponent},
  {path: "admin-connection",component : AdminConnectionComponent},
  {path: "parent-connection",component : ParentConnectionComponent},
  {path: "dashboard-admin",component : DashboardAdminComponent},
  {path: "parent-page",component : ParentPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
