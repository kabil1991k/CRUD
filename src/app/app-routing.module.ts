import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './new/emp/emp.component';
import { EmployeeComponent } from './pages/employee/employee.component';


const routes: Routes = [
 
{path:'emp',component:EmpComponent},
{path:'employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
