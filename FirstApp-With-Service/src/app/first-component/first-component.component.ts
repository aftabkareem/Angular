import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  counter: number = 0;
  @Input() count: number = 0;

  IncrementCount() {
    this.counter++;
  }
}
