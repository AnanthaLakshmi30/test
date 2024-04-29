import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/feature/Services/login.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit{

  addEmployeeForm:any=new FormGroup({})

  constructor(private formBulider:FormBuilder,private router:Router,private service:LoginService){

  }

  ngOnInit(): void {
    this.formInitialization()
    
  }

  formInitialization(){

    this.addEmployeeForm=this.formBulider.group({
      employeeFirstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      middleName:['',[]],
      employeeNumber:['',[Validators.required]],
      dateOfJoining:['',[Validators.required]],
      location:['',[Validators.required]],
      email:['',[Validators.required]]



    })

  }

  submit(){
    // this.router.navigate(['.'])
    console.log(this.addEmployeeForm);
    

    const data={
      First_Name:this.addEmployeeForm.value['employeeFirstName'],
      Middle_Name:this.addEmployeeForm.value['middleName'],
      Last_Name:this.addEmployeeForm.value['lastName'],
      Employee_Number:this.addEmployeeForm.value['employeeNumber'],
      Date_Of_Joining:this.addEmployeeForm.value['dateOfJoining'],
      Location:this.addEmployeeForm.value['location'],
      Email_Id:this.addEmployeeForm.value['email'],

    }
    console.log(data);
    

    this.service.addEmployee(data).subscribe(res=>{
      console.log(res);

      
   
      
    })

    
    
  }


  
  
}
