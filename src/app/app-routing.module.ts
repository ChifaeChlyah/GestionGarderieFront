import { ListEnfantsComponent } from './components/enfants/list-enfants.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParentComponent } from './components/parents/list-parent/list-parent.component';
import { ListAideEducComponent as ListEdu} from './components/aide-educateur/list/list-aide-educ.component';
import {ChooseConnectionComponent} from "./components/choose-connection/choose-connection.component";
import {AdminConnectionComponent} from "./components/admin-connection/admin-connection.component";
import {ParentConnectionComponent} from "./components/parent-connection/parent-connection.component";
import {DashboardAdminComponent} from "./components/dashboard-admin/dashboard-admin.component";
import {ParentPageComponent} from "./components/parent-page/parent-page.component";
import {ActivitieComponent} from "./components/dashboard-admin/activite/activitie.component";
import {AcceuilComponent} from "./components/dashboard-admin/acceuil/acceuil.component";


const routes: Routes = [
  {path: "",component : ChooseConnectionComponent},
  {path: "admin-connection",component : AdminConnectionComponent},
  {path: "parent-connection",component : ParentConnectionComponent},
  {path: "dashboard-admin",component : DashboardAdminComponent,
    children:[
      {path: "accueil",component : AcceuilComponent},
      {path: "list-parents",component : ListParentComponent},
      {path: "list-enfants",component : ListEnfantsComponent},
      {path: "list-aide-educateur",component : ListEdu},
      {path: "list-activites",component : ActivitieComponent},
    ]},
  {path: "parent-page/:id",component : ParentPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
