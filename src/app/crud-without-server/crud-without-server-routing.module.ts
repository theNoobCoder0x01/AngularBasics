import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//////////////////////////////////////////////////////////////////////////////////////////////
// import { EmployeeFormComponent } from './components/crud-form/employee-form.component';
// import { EmployeeListViewComponent } from './components/crud-list-view/employee-list-view.component';
import { CrudWithoutServerComponent } from './crud-without-server.component';

const routes: Routes = [
  {
    path: '', component: CrudWithoutServerComponent
    // children: [
    //   {
    //     path: '', redirectTo: 'emplist', pathMatch: 'full'
    //   },
    //   {
    //     path: 'add', component: EmployeeFormComponent
    //   },
    //   {
    //     path: 'edit/:id', component: EmployeeFormComponent
    //   },
    //   {
    //     path: 'emplist', component: EmployeeListViewComponent
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudWithoutServerRoutingModule { }
