import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  dropdown = false;
  letter=false;
  constructor(public router: Router) {

  }
  touch() {
    this.dropdown = !this.dropdown;
    this.letter=false;
  }

  letters(){
    this.letter=!this.letter

  }
  employyeDetails() {
    this.router.navigate(['home/employees/empdetails']);
  }

}
