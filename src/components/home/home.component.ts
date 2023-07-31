import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p style="font-weight: 900;">
      Home works!
    </p>
<div></div>
  `,
  styles: [`color: red;`
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
