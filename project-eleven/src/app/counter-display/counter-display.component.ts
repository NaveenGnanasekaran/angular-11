import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
  @Input()
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
