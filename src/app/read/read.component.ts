import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  @Input()
  @Output()
  turnBackEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {
    (<HTMLInputElement>document.getElementById('chapter')).value = '2';
    (<HTMLInputElement>document.getElementById('page')).value = '1';
  }

  turnBack() {
    this.turnBackEvent.emit();
  }
}
