import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
//employee:Employee[];
public employe=[];

  constructor(private em:EmployeeService) { }

  ngOnInit(){
    this.em.getData().subscribe((Response)=>{
      console.log(Response);
      this.employe=Response;
    })
  }

}
