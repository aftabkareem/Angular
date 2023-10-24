import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-text',
  templateUrl: './counter-text.component.html',
  styleUrls: ['./counter-text.component.css']
})
export class CounterTextComponent {
  @Input() countData: number = 0;

}
