import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public tdata={
            thead:[
              {
                id: 'checkbox',
                text: '',
                isSortable: true,
                type: 'checkbox'
              },
              {
                id: 'name',
                text: 'Name',
                isSortable: true,
                type: 'text'
              },
              {
                id: 'email',
                text: 'Email',
                isSortable: true,
                type: 'text'
              },
              {
                id: 'phone',
                text: 'PhoneNo',
                isSortable: true,
                type: 'text'
              },
              {
                id: 'active',
                text: 'Active',
                isSortable: true,
                type: 'toggle'
              },
              {
                id: 'action',
                text: 'Action',
                isSortable: true,
                type: 'button-2',
              }
            ],
            tbody: [
              { checkbox: true ,name: 'satyam', email: 'abc@123' ,phone: 12, active: true, action:"delete"},
              { checkbox: false ,name: 'yaskaran', email: 'abc@123' ,phone: 12, active: false, action:"delete" },
              { checkbox: true ,name: 'karan', email: 'abc@123' ,phone: 12, active: false, action:"delete"},
              { checkbox: true ,name: 'satyam', email: 'abc@123' ,phone: 12, active: true, action:"delete"},
              { checkbox: false ,name: 'yaskaran', email: 'abc@123' ,phone: 12, active: false, action:"delete" },
              { checkbox: true ,name: 'karan', email: 'abc@123' ,phone: 12, active: false, action:"delete"},
              { checkbox: true ,name: 'satyam', email: 'abc@123' ,phone: 12, active: true, action:"delete"},
              { checkbox: false ,name: 'yaskaran', email: 'abc@123' ,phone: 12, active: false, action:"delete" },
              { checkbox: true ,name: 'karan', email: 'abc@123' ,phone: 12, active: false, action:"delete"},
              { checkbox: true ,name: 'satyam', email: 'abc@123' ,phone: 12, active: true, action:"delete"},
              { checkbox: false ,name: 'yaskaran', email: 'abc@123' ,phone: 12, active: false, action:"delete" },
              { checkbox: true ,name: 'karan', email: 'abc@123' ,phone: 12, active: false, action:"delete"},
            ]
    }
 
  constructor() { }

  ngOnInit(): void {
  }
  public childData($event: any){
    alert($event);
  }

}
