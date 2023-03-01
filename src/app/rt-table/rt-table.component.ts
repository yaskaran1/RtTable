import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ParentComponent } from '../home/parent/parent.component';

@Component({
  selector: 'app-rt-table',
  templateUrl: './rt-table.component.html',
  styleUrls: ['./rt-table.component.scss']
})
export class RtTableComponent implements OnInit {

  @Input() tableData :any;
  @Output() delData=new EventEmitter<string>();
  @Output() editData=new EventEmitter<string>();
  checks=false;
  
  constructor() { 
  }

  ngOnInit(): void {

  }
  public btnDel(a: any):void{
    this.delData.emit("Confirm delete ? ");
    let indexData=this.tableData.tbody.indexOf(a);
    this.tableData.tbody.splice(indexData,1);
  }
  public btnEdit():void{
    this.editData.emit("you click on edit button");
  }
  public selectAll(e: any){
    this.checks=e.target.checked;
  }
}
