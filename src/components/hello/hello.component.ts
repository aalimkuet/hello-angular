import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../Services/data.service';
 

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public name = "";       
  @Input() inputData: string=""; 
  conditionalBlock = true;
  @Output() outData = new EventEmitter();

  BtnClick(Id: number, name: string) {

  }

  public students = new Array();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.dataService.SendGetRequest().subscribe((data: any[]) => {
      this.students = data;
    })  
  }
}

