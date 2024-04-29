import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginfunctionality1(data:any){
    const res = this.http.post('',data);
    return res;
  }

  loginfunctionality2(data:any){
    const res=this.http.get('',data);
    return res;
    
  
  }

  addEmployee(data:any){
    const res=this.http.post('http://127.0.0.1:5000/add_emp_details',data)
    return res;
  }

  getAllperson(){
    return this.http.get("http://127.0.0.1:5000/get_emp_details")
  }


}


