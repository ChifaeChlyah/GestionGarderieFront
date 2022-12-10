import { GetAllPageComponent } from './components/get-all-page/get-all-page.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/parents/add/add.component';
import { ListComponent } from './components/parents/list/list.component';

const routes: Routes = [
  {path :"add" , component : AddPageComponent},
  {path: "get",component : GetAllPageComponent},
  {path: "add-parent",component : AddComponent},
  {path: "get-parent",component : ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
