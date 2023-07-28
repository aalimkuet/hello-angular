import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public name = "";
  public colors = ["Red", "Green", "Blue"];
  values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
  btnClick(Id: number, name: string) {
    alert(Id + name);
    var int322 = new Int32Array(429);
    int322[0] = 123456789;
    console.log('console log ' + int322[0]);
  }
  a = [];
  public students = new Array();
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.dataService.SendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.students = data;
    })  
  }

}

