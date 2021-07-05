import { Component } from '@angular/core';

export class Employee{
  public id:number;
  public name:string;
  public email:string;
  public phone:number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student:Employee=new Employee();
}
