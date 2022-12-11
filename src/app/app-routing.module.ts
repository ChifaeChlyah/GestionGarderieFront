import { ListEnfantsComponent } from './components/enfants/list-enfants.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/parents/add-parent/add.component';
import { AddAideEducComponent as AddEdu} from './components/aide-educateur/add/add-aide-educ.component';
import { ListParentComponent } from './components/parents/list-parent/list-parent.component';
import { ListAideEducComponent as ListEdu} from './components/aide-educateur/list/list-aide-educ.component';
import {ChooseConnectionComponent} from "./components/choose-connection/choose-connection.component";
import {AdminConnectionComponent} from "./components/admin-connection/admin-connection.component";
import {ParentConnectionComponent} from "./components/parent-connection/parent-connection.component";
import {DashboardAdminComponent} from "./components/dashboard-admin/dashboard-admin.component";
import {ParentPageComponent} from "./components/parent-page/parent-page.component";


const routes: Routes = [
  {path :"add" , component : AddPageComponent},
  {path: "",component : ChooseConnectionComponent},
  {path: "admin-connection",component : AdminConnectionComponent},
  {path: "parent-connection",component : ParentConnectionComponent},
  {path: "dashboard-admin",component : DashboardAdminComponent,
    children:[
      {path: "list-parents",component : ListParentComponent},
      {path: "list-enfants",component : ListEnfantsComponent},
      {path: "list-aide-educateur",component : ListEdu},
    ]},
  {path: "parent-page",component : ParentPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
