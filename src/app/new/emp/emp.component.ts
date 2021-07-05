import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 /* Employee=[
    {
      id:1,
      name:"kabil",
      email:"k.kabil17@gmail.com",
      phone:97897897,
      amount:8866998
    },
    {
      id:2,
      name:"vishnu",
      email:"k.kabil17@gmail.com",
      phone:97897897,
      amount:500
    },
    {
      id:3,
      name:"kiran",
      email:"k.kabil17@gmail.com",
      phone:97897897,
      amount:1000
    },
    {
      id:4,
      name:"kabil",
      email:"k.kabil17@gmail.com",
      phone:97897897,
      amount:300
    }
  ];*/
  data={
     
    first_name:"",
    last_name:"",
    mobile:null,
    email:null,
  }
  
  constructor(private employe:EmployeeService) { }
  onsubmit()
  {
  console.log(this.data);
   this.employe.getEmployees(this.data).subscribe((Response)=>{
     console.log(Response);
     
     
   })
  }
  ngOnInit(): void {
 
    
  }
  
}
