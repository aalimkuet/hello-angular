import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p style="font-weight: 900;">
      Home works!
      <app-hello [inputData]="parentData" (outData)="onCongrats()"></app-hello>
    </p>
    <p *ngIf=""></p>
  `,
  styles: [
    `
      color: red;
    `,
  ],
})
export class HomeComponent implements OnInit {
  parentData: any = 'Hello Angular from parent!';
  constructor() {}

  ngOnInit(): void {}

  onCongrats() {
    alert('Hi, Congrats');
  }
}
