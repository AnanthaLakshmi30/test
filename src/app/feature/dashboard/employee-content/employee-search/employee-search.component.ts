import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/feature/Services/login.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit{
  data:any
  searchText:any;
  employees: any = [];
  allEmployees:any=[];

  ngOnInit(): void {
    this.getServices()
    
  }

  constructor(private router:Router ,private service:LoginService){

  }

  addbtnclk(){
    this.router.navigate(['/home/employees/addemp']);
  }

  getServices(){
    this.service.getAllperson().subscribe(res =>{
      console.log("res get",res);
      this.data = res['data']
      this.employees = res['data'],
      this.allEmployees=res['data'];
    })
  }

  filter(event: any) {
    const filterValue =event.target.value
    // alert(filterValue)
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {
        this.employees=this.allEmployees;
    } 
    else {
      this.employees = this.allEmployees.filter((employee) => employee.Employee_First_Name.toLowerCase().includes(filterValueLower) || employee.Employee_Number.toLowerCase().includes(filterValueLower) ||employee.Last_Name.toLowerCase().includes(filterValueLower) ||employee.Email.toLowerCase().includes(filterValue)
    
    )
     
    }
 }
 
  

}
