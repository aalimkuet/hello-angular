import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p style="font-weight: 900;">
      home works!
    </p>
<div></div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
